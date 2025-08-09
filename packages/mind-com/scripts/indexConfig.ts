export const config = {
  // Директория для обработки (только английский контент)
  rootDir: "../docs/en",

  // Pinecone настройки
  pineconeIndex: process.env.PINECONE_INDEX_NAME,

  // OpenAI модель для эмбеддингов
  embeddingModel: "text-embedding-3-small",
  embeddingDimensions: 1536,

  // Файлы и директории для исключения
  exclude: ["exp/*", "chat.md", "test/*", "*.log"],

  // Разрешенные расширения файлов (как в translate.ts)
  allowedExtensions: [".md", ".vue", ".svg"],

  // Стратегия разбиения на чанки
  chunkStrategy: "headings", // разбивать по заголовкам H2/H3

  // Минимальная длина текста для индексации (символы)
  minTextLength: 50,

  // Максимальная длина одного чанка (символы)
  maxChunkLength: 2000,
}
