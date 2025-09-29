#!/usr/bin/env tsx

import puppeteer from "puppeteer"
// @ts-ignore
import TurndownService from "turndown"
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

      await page.waitForSelector("article", { timeout: this.config.timeouts.elementWait })

      const article = await page.evaluate(() => {
        const titleElement = document.querySelector("h1")
        const authorElement = document.querySelector('[data-testid="authorName"] a')
        const timeElement = document.querySelector("time")
        const articleElement = document.querySelector("article")

        if (!titleElement || !articleElement) {
          throw new Error("Required elements not found")
        }

        const title = titleElement.textContent?.trim() || "Untitled"
        const author = authorElement?.textContent?.trim() || "Unknown Author"
        const publishDate = timeElement?.getAttribute("datetime") || new Date().toISOString()

        const images = Array.from(articleElement.querySelectorAll("img")).map((img, index) => ({
          src: img.src,
          alt: img.alt || `Image ${index + 1}`,
        }))

        return {
          title,
          author,
          publishDate,
          content: articleElement.innerHTML,
          images: images.slice(0, 20), // Limit to 20 images
        }
      })

      console.log(`Found article: "${article.title}" by ${article.author}`)
      console.log(`Found images: ${article.images.length}`)

      const turndown = new TurndownService({
        headingStyle: "atx",
        bulletListMarker: "-",
      })

      const markdown = turndown.turndown(article.content)
      const processedImages = await this.downloadImages(article.images, article.title)

      await browser.close()

      return {
        ...article,
        content: markdown,
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
author: "${config.author}"
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
