<script setup>
import { ref, computed } from "vue"
import { renderMarkdown } from "../utils/markdown"

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ q: '...', a: '...' }]
  },
})

const openStates = ref(props.items.map(() => false))

// Рендерим маркдаун в элементах списка
const renderedItems = computed(() => {
  return (
    props.items?.map((item) => ({
      q: item.q,
      a: renderMarkdown(item.a),
    })) || []
  )
})

function toggle(index) {
  openStates.value[index] = !openStates.value[index]
}
</script>

<template>
  <div class="accordion-group">
    <div v-for="(item, index) in renderedItems" :key="index" class="accordion-item">
      <button class="accordion-header" @click="toggle(index)">
        {{ item.q }}
      </button>
      <div class="accordion-content" v-show="openStates[index]">
        <p v-html="item.a"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-group {
  margin-top: 2rem;
}

.accordion-item {
  border-top: 1px solid var(--vp-c-divider);
}

.accordion-header {
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.accordion-header:hover {
  background: var(--vp-c-bg-alt);
}

.accordion-content {
  padding: 0 1rem 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}
</style>
