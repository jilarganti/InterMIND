// shared/components/AIChat/SearchInput.vue
<script setup lang="ts">
import { ref } from "vue"
import { Search } from "lucide-vue-next"
import { useRouter } from "vitepress"

interface Props {
  /**
   * Плейсхолдер для поля ввода
   */
  placeholder?: string

  /**
   * URL чата для перехода
   */
  chatUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Quick search...",
  chatUrl: "/chat",
})

const router = useRouter()
const searchQuery = ref("")

// Обработчик отправки запроса
const handleSubmit = () => {
  if (!searchQuery.value.trim()) return

  // Формируем URL с query параметром
  const url = `${props.chatUrl}?q=${encodeURIComponent(searchQuery.value.trim())}`

  // Переходим на страницу чата
  router.go(url)
}

// Обработчик нажатия Enter
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault()
    handleSubmit()
  }
}
</script>

<template>
  <div class="search-nav-container">
    <div class="search-input-wrapper">
      <Search :size="16" class="search-icon" />
      <input v-model="searchQuery" type="text" :placeholder="placeholder" class="search-input" @keydown="handleKeyDown" />
    </div>
  </div>
</template>

<style scoped>
.search-nav-container {
  display: flex;
  align-items: center;
  margin-left: 24px; /* Добавили отступ слева */
  margin-right: 16px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 10px;
  color: var(--vp-c-text-3);
}

.search-input {
  width: 200px;
  height: 36px;
  padding: 0 10px 0 32px;
  font-size: 14px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  color: var(--vp-c-text-1);
  transition: all 0.2s;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

/* Для мобильных устройств */
@media (max-width: 768px) {
  .search-nav-container {
    display: none;
  }
}
</style>
