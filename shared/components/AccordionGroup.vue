<script setup lang="ts">
import { ref } from "vue"
import { renderMarkdown } from "../utils/markdown"

interface AccordionItem {
  q: string
  a: string
}

const props = defineProps<{
  items: AccordionItem[]
}>()

const openStates = ref(props.items.map(() => false))

function toggle(index: number) {
  openStates.value[index] = !openStates.value[index]
}
</script>

<template>
  <div class="accordion-group">
    <div v-for="(item, index) in props.items" :key="index" class="accordion-item">
      <button class="accordion-header" @click="toggle(index as number)">
        <span>{{ (item as AccordionItem).q }}</span>
        <span class="accordion-emoji">
          {{ openStates[index as number] ? "↑" : "↓" }}
        </span>
      </button>
      <transition name="fade">
        <div class="accordion-content" v-if="openStates[index as number]">
          <p v-html="renderMarkdown((item as AccordionItem).a)"></p>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.accordion-group {
  margin: 2rem 0;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.accordion-header:hover {
  background: var(--vp-c-bg-alt);
}

.accordion-emoji {
  margin-left: 0.5em;
}

.accordion-content {
  padding: 0 1rem 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

/* Fade transition */
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
