/**
 * Тест функции извлечения изображений без API вызовов
 */

/**
 * Extracts image references from markdown content
 */
function extractImages(content: string, filePath: string, rootDir: string): ImageInfo[] {
  const images: ImageInfo[] = []
  const fileDir = path.dirname(filePath)
  
  // Match markdown images: ![alt](src)
  const imageRegex = /!\[([^\]]*)\]\(([^)]+)\)/g
  let match
  
  while ((match = imageRegex.exec(content)) !== null) {
    const [fullMatch, alt, src] = match
    
    // Skip external images (http/https URLs)
    if (src.startsWith('http://') || src.startsWith('https://')) {
      continue
    }
    
    // Resolve relative path to absolute
    const imagePath = path.resolve(fileDir, src)
    
    // Generate relative URL for the image (from site root)
    let imageRelativeUrl = path.relative(rootDir, imagePath)
    
    // Normalize path separators and ensure it starts with relative path
    imageRelativeUrl = imageRelativeUrl.replace(/\\/g, '/')
    if (!imageRelativeUrl.startsWith('.')) {
      imageRelativeUrl = './' + imageRelativeUrl
    }
    
    // Get context (surrounding text)
    const contentLines = content.split('\n')
    let context = ''
    
    for (let i = 0; i < contentLines.length; i++) {
      if (contentLines[i].includes(fullMatch)) {
        // Get context from surrounding lines
        const start = Math.max(0, i - 2)
        const end = Math.min(contentLines.length, i + 3)
        context = contentLines.slice(start, end).join(' ').replace(fullMatch, '').trim()
        break
      }
    }
    
    images.push({
      src: src,
      alt: alt || 'Image',
      context: context,
      relativeUrl: imageRelativeUrl
    })
  }
  
  return images
}

interface ImageInfo {
  src: string
  alt: string
  context: string
  relativeUrl: string
}

import * as path from "path"

// Тестовые данные
const testContent = `# How AI Real-Time Translation Works

## Speak and Listen in Your Language

InterMind is a multi-user video conferencing platform with **instant bidirectional translation**.

## How it works:

![](./interpretating.svg)

### 1. **Speech Recognition (Speech-to-Text)**

- Streaming recognition using transformer models
- Processing noise and background sounds`

const testFilePath = "/Users/kingwww/VSCode/GoldenFishProject/packages/mind-com/docs/en/product/overview/how-it-works.md"
const testRootDir = "/Users/kingwww/VSCode/GoldenFishProject/packages/mind-com/docs/en"

console.log("🧪 Тестируем извлечение изображений...")
console.log(`📁 Файл: ${testFilePath}`)
console.log(`📁 Корень: ${testRootDir}`)

const extractedImages = extractImages(testContent, testFilePath, testRootDir)

console.log(`\n📸 Найдено изображений: ${extractedImages.length}`)

extractedImages.forEach((image, index) => {
  console.log(`\n[${index + 1}] ${image.alt}`)
  console.log(`  Исходный путь: ${image.src}`)
  console.log(`  Относительный URL: ${image.relativeUrl}`)
  console.log(`  Контекст: ${image.context}`)
})

// Тест форматирования для AI
console.log("\n=== ФОРМАТИРОВАНИЕ ДЛЯ AI ===")
if (extractedImages.length > 0) {
  const imageList = extractedImages.map((img: any) => 
    `![${img.alt || 'Diagram'}](${img.relativeUrl})`
  ).join('\n')
  console.log(imageList)
}
