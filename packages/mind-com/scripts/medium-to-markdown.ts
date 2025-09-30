#!/usr/bin/env tsx

import puppeteer from "puppeteer"
// @ts-ignore
import TurndownService from "turndown"
import { gfm } from "turndown-plugin-gfm"
import axios from "axios"
import { promises as fs, createWriteStream, existsSync } from "fs"
import * as path from "path"
import { mediumScraperConfig } from "./mediumScraperConfig.js"

interface MediumArticle {
  title: string
  author: string
  publishDate: string
  content: string
  images: Array<{
    src: string
    alt: string
    localPath: string
  }>
}

class MediumScraper {
  private config = mediumScraperConfig
  private outputDir: string
  private imagesDir: string

  constructor() {
    this.outputDir = path.resolve(this.config.output.defaultDir)
    this.imagesDir = path.resolve(this.config.output.imagesDir)
  }

  async scrapeArticle(url: string): Promise<MediumArticle> {
    console.log(`Extracting content from: ${url}`)

    const browser = await puppeteer.launch({
      headless: this.config.browser.headless,
    })

    try {
      const page = await browser.newPage()

      await page.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36")

      await page.goto(url, {
        waitUntil: "networkidle2",
        timeout: this.config.timeouts.pageLoad,
      })

      // Проверяем что загрузилось и даем понятные ошибки
      const pageTitle = await page.title()
      console.log(`Page title: ${pageTitle}`)

      // Проверка на paywall/login
      const isPaywall = await page.$('.paywall, [data-testid="paywall"], .js-signInModal, [class*="member-preview"], [class*="upgrade-"]')
      if (isPaywall) {
        throw new Error(`❌ Article requires Medium membership or login: ${pageTitle}`)
      }

      // Проверка на 404
      if (pageTitle.includes("Page not found") || pageTitle.includes("404")) {
        throw new Error(`❌ Page not found (404): ${url}`)
      }

      // Ждем статью с понятной ошибкой
      try {
        await page.waitForSelector("article, [role='main'], main", { timeout: 10000 })
      } catch (error) {
        // Проверим что вообще есть на странице
        const bodyText = await page.evaluate(() => document.body?.textContent?.slice(0, 200) || "")
        throw new Error(`❌ Article content not found. Page shows: "${bodyText}..."`)
      }

      const article = await page.evaluate((configData) => {
        const titleElement = document.querySelector("h1")
        const authorElement = document.querySelector('a[data-testid="authorName"]')
        const timeElement = document.querySelector("time")
        const articleElement = document.querySelector("article") || document.querySelector("[role='main']") || document.querySelector("main")

        if (!titleElement || !articleElement) {
          throw new Error("Required elements not found")
        }

        // Клонируем статью для очистки
        const cleanArticle = articleElement.cloneNode(true) as Element

        // Удаляем элементы из конфига
        configData.contentCleaning.removeElements.forEach((selector: string) => {
          try {
            const elements = cleanArticle.querySelectorAll(selector)
            elements.forEach((el) => el.remove())
          } catch (e) {
            // Игнорируем ошибки селекторов
          }
        })

        // Получаем HTML контент
        let contentHTML = cleanArticle.innerHTML

        // Обрезаем контент после фраз из конфига (простой поиск по тексту)
        for (const phrase of configData.contentCleaning.cutoffPhrases) {
          const cutoffIndex = contentHTML.indexOf(phrase)
          if (cutoffIndex !== -1) {
            contentHTML = contentHTML.substring(0, cutoffIndex)
            break
          }
        }

        const title = titleElement.textContent?.trim() || "Untitled"

        // Извлекаем автора как ссылку в markdown формате
        let author = "Unknown Author"
        if (authorElement) {
          const authorName = authorElement.textContent?.trim() || "Unknown Author"
          const authorUrl = authorElement.getAttribute("href")
          if (authorUrl) {
            // Создаем полную ссылку если это относительный путь
            const fullUrl = authorUrl.startsWith("http") ? authorUrl : `https://medium.com${authorUrl}`
            author = `[${authorName}](${fullUrl})`
          } else {
            author = authorName
          }
        }

        const publishDate = timeElement?.getAttribute("datetime") || new Date().toISOString()

        const images = Array.from(cleanArticle.querySelectorAll("img")).map((img, index) => ({
          src: img.src,
          alt: img.alt || `Image ${index + 1}`,
        }))

        return {
          title,
          author,
          publishDate,
          content: contentHTML,
          images: images, // No limit on images
        }
      }, this.config)

      const typedArticle = article as {
        title: string
        author: string
        publishDate: string
        content: string
        images: { src: string; alt: string }[]
      }

      console.log(`Found article: "${typedArticle.title}" by ${typedArticle.author}`)
      console.log(`Found images: ${typedArticle.images.length}`)

      // Remove old turndown instance - we'll use turndownService with GFM plugin

      // Configure turndown service with GFM plugin for tables
      const turndownService = new TurndownService({
        headingStyle: "atx",
        codeBlockStyle: "fenced",
      })

      // Use GitHub Flavored Markdown plugin for tables
      turndownService.use(gfm)

      // Debug: Check what's actually in the content
      console.log("Content sample:", typedArticle.content.substring(0, 1000))

      // Look for table-related elements
      const tableMatches = typedArticle.content.match(/<table[^>]*>/gi)
      const divMatches = typedArticle.content.match(/class="[^"]*table[^"]*"/gi)
      const accessibilityTable = typedArticle.content.match(/markdown-accessibility-table/gi)

      console.log("Table matches:", tableMatches?.length || 0)
      console.log("Div with table class:", divMatches?.length || 0)
      console.log("Accessibility table:", accessibilityTable?.length || 0)

      const markdown = turndownService.turndown(typedArticle.content)

      // Convert relative Medium links to absolute ones
      const processedMarkdown = this.config.linkProcessing?.convertRelativeLinks
        ? markdown.replace(/\[([^\]]+)\]\(\/([^)]+)\)/g, (match, text, path) => {
            if (path.startsWith("http") || path.startsWith("#")) return match
            console.log(`Converting: /${path} -> https://medium.com/${path}`)
            return `[${text}](https://medium.com/${path})`
          })
        : markdown

      const processedImages = await this.downloadImages(typedArticle.images, typedArticle.title)

      await browser.close()

      return {
        ...typedArticle,
        content: processedMarkdown,
        images: processedImages,
      }
    } catch (error) {
      await browser.close()
      throw error
    }
  }

  private async downloadImages(
    images: Array<{ src: string; alt: string }>,
    articleTitle: string,
  ): Promise<Array<{ src: string; alt: string; localPath: string }>> {
    const processedImages: Array<{ src: string; alt: string; localPath: string }> = []

    await fs.mkdir(this.imagesDir, { recursive: true })

    const safeTitle = articleTitle
      .replace(/[^a-zA-Z0-9\-_\s]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
      .substring(0, 50)

    for (let i = 0; i < images.length; i++) {
      const img = images[i]
      console.log(`Downloading image: ${img.alt}`)

      try {
        const response = await axios.get(img.src, {
          responseType: "stream",
          timeout: this.config.timeouts.imageDownload,
          headers: {
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Referer": "https://medium.com/",
            "Accept": "image/*,*/*;q=0.8",
          },
        })

        const extension = path.extname(new URL(img.src).pathname) || ".jpg"
        const fileName = `${safeTitle}-img-${i + 1}${extension}`
        const filePath = path.join(this.imagesDir, fileName)

        const writer = createWriteStream(filePath)
        response.data.pipe(writer)

        await new Promise<void>((resolve, reject) => {
          writer.on("finish", () => resolve())
          writer.on("error", reject)
        })

        console.log(`Image saved: ${fileName}`)

        processedImages.push({
          src: `/blog/images/${fileName}`,
          alt: img.alt,
          localPath: filePath,
        })
      } catch (error) {
        console.log(`Failed to download image ${img.src}`)
        processedImages.push({
          src: img.src,
          alt: img.alt,
          localPath: img.src,
        })
      }
    }

    return processedImages
  }

  private generateFrontmatter(article: MediumArticle): string {
    const config = mediumScraperConfig.frontmatter

    let frontmatter = `---
layout: ${config.layout}
title: "${article.title}"
author: "${article.author}"
date: ${article.publishDate.split("T")[0]}
`

    Object.entries(config.additionalFields).forEach(([key, value]) => {
      if (value) {
        frontmatter += `${key}: ${typeof value === "string" ? `"${value}"` : value}
`
      }
    })

    frontmatter += `---

`
    return frontmatter
  }

  async saveArticle(article: MediumArticle): Promise<string> {
    const safeTitle = article.title
      .replace(/[^a-zA-Z0-9\-_\s]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase()
    const fileName = `${safeTitle}.md`
    const filePath = path.join(this.outputDir, fileName)

    const frontMatter = this.generateFrontmatter(article)
    const fullContent = frontMatter + article.content

    await fs.mkdir(this.outputDir, { recursive: true })
    await fs.writeFile(filePath, fullContent, "utf-8")

    console.log(`Article saved: ${filePath}`)
    return filePath
  }
}

async function main() {
  const url = process.argv[2]

  if (!url) {
    console.error("Usage: npm run medium-scraper <URL>")
    console.error("Example: npm run medium-scraper https://medium.com/@author/article-title")
    process.exit(1)
  }

  const isSupported = mediumScraperConfig.supportedDomains.some((domain) => new URL(url).hostname.includes(domain))

  if (!isSupported) {
    console.error(`Only supported domains: ${mediumScraperConfig.supportedDomains.join(", ")}`)
    process.exit(1)
  }

  try {
    const scraper = new MediumScraper()
    const article = await scraper.scrapeArticle(url)
    const filePath = await scraper.saveArticle(article)

    console.log("\nExtraction completed successfully!")
    console.log(`File saved: ${filePath}`)
    console.log(`Images downloaded: ${article.images.length}`)
  } catch (error) {
    console.error("Error during extraction:", error)
    process.exit(1)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export { MediumScraper, type MediumArticle }
