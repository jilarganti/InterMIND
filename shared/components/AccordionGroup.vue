<script setup>
import { ref } from "vue"

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ q: '...', a: '...' }]
  },
})

const openStates = ref(props.items.map(() => false))

function toggle(index) {
  openStates.value[index] = !openStates.value[index]
}
</script>

<template>
  <div class="accordion">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <button
        class="accordion-header"
        @click="toggle(index)"
        :class="{ active: openStates[index] }"
        :aria-expanded="openStates[index] ? 'true' : 'false'"
        type="button"
      >
        {{ item.q }}
      </button>
      <div
        class="accordion-content"
        :style="openStates[index] ? 'max-height:300px;opacity:1;padding-bottom:1rem;padding-top:0.5rem;' : ''"
        v-show="openStates[index]"
      >
        <p>{{ item.a }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  /* border: 1px solid var(--vp-c-divider, #e2e2e3); */
  /* border-radius: 6px; */
  /* background: var(--vp-c-bg, #fff); */
  /* box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.03); */
  overflow: hidden;
  margin-top: 2rem;
}

.accordion-item + .accordion-item {
  border-top: 1px solid var(--vp-c-divider, #e2e2e3);
}

.accordion-header {
  /* background: var(--vp-c-bg-soft, #f7f7f7); */
  border: none;
  width: 100%;
  text-align: left;
  padding: 1rem 2.2rem 1rem 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  position: relative;
  color: var(--vp-c-text-1, #222);
  /* transition: background 0.2s; */
}

.accordion-header:hover,
.accordion-header:focus {
  background: var(--vp-c-bg-alt, #eee);
}

.accordion-header::after {
  content: "›";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%) rotate(0deg);
  font-size: 1.2em;
  color: var(--vp-c-text-3, #888);
  transition: transform 0.3s;
}

.accordion-header[aria-expanded="true"]::after,
.accordion-header.active::after {
  transform: translateY(-50%) rotate(90deg);
  color: var(--vp-c-brand-1, #bc694a);
}

.accordion-content {
  padding: 0 1rem;
  background: var(--vp-c-bg, #fff);
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.3s,
    padding 0.2s;
  opacity: 0;
}

.accordion-content p {
  margin: 1rem 0;
  font-size: 1rem;
  color: var(--vp-c-text-2, #444);
}

.accordion-item .accordion-content[style*="display: block"],
.accordion-content[style*="display: block"] {
  max-height: 300px;
  opacity: 1;
  padding-bottom: 1rem;
  padding-top: 0.5rem;
}

@media (max-width: 600px) {
  .accordion-header {
    font-size: 0.98rem;
    padding: 1rem 2rem 1rem 0.7rem;
  }
  .accordion-content {
    font-size: 0.96rem;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
  }
}
</style>
