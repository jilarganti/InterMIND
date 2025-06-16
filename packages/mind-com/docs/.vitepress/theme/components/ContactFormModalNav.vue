<script setup lang="ts">
/**
 * Компонент-обертка над ContactFormModal, который автоматически передает путь текущей страницы
 * как formName для идентификации источника запроса.
 *
 * @param buttonText - Текст кнопки (по умолчанию: "Get a free consultation")
 * @param services - Список сервисов (опционально)
 * @param formStyle - Стили кнопки (опционально)
 * @param buttonClass - Тема кнопки: 'brand', 'alt', 'sponsor' (по умолчанию: 'brand')
 * @param categoryLabel - Заголовок поля категорий (опционально)
 * @param categoryPlaceholderText - Плейсхолдер для поля категорий (опционально)
 * @param messageLabel - Заголовок поля сообщения (опционально)
 * @param messagePlaceholderText - Плейсхолдер для поля сообщения (опционально)
 *
 * @usage
 * <ContactFormModalNav
 *   buttonText="Get consultation"
 *   buttonClass="sponsor"
 *   :services="['Global Visa', 'Other Services']"
 *   categoryLabel="Выберите услугу"
 * />
 */
import { useData } from "vitepress"
import ContactFormModal from "./ContactFormModal.vue"
import { computed } from "vue"

const hide = computed(() => useData().frontmatter.value.hideComponents?.includes("ContactFormModalNav"))

// Определяем пропсы, кроме formName, который берем из текущего пути
const props = defineProps<{
  buttonText?: string
  services?: string[]
  formStyle?: string
  buttonClass?: "brand" | "alt" | "sponsor"
  categoryLabel?: string
  categoryPlaceholderText?: string
  messageLabel?: string
  messagePlaceholderText?: string
}>()

// Обрабатываем текущий путь страницы для использования как formName
const formName = computed(() => {
  // Выводим путь для отладки
  // console.log("Исходный путь:", page.value.relativePath)

  // Удаляем локаль из пути и форматируем для лучшей читаемости
  const path = useData()
    .page.value.relativePath // Удаляем префикс локали и расширение файла
    .replace(/^(en|ar|hi|ur|bn|ml|ta|te|fa|zh|fr|ru|uk|tr|ko|ja|id|vi|pt|es|de)\//, "")
    .replace(/\.md$/i, "") // регистронезависимое удаление .md
    // Форматируем путь для читаемости
    .replace(/\//g, " > ")
    .replace(/-/g, " ")
    // Переводим все в нижний регистр и затем первую букву каждого слова в верхний
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase())

  // console.log("Обработанный путь:", path)
  return `Page: ${path}` || "Unknown Page"
})

// Передаем успешное событие наверх
const emit = defineEmits(["success"])

const handleSuccess = () => {
  emit("success")
}
</script>

<template>
  <ContactFormModal
    v-if="!hide"
    :formName="formName"
    :buttonText="buttonText"
    :services="services"
    :formStyle="formStyle"
    :buttonClass="buttonClass"
    :categoryLabel="categoryLabel"
    :categoryPlaceholderText="categoryPlaceholderText"
    :messageLabel="messageLabel"
    :messagePlaceholderText="messagePlaceholderText"
    @success="handleSuccess"
  />
</template>
