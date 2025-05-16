<template>
  <div class="accordion-group">
    <div v-for="(item, index) in items" :key="index" class="accordion-item">
      <button class="accordion-header" @click="toggle(index)">
        {{ item.q }}
      </button>
      <div class="accordion-content" v-show="openStates[index]">
        <p v-html="item.a"></p>
      </div>
    </div>
  </div>
</template>

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

<style scoped>
.accordion-group {
  /* border-top: 1px solid #ddd; */
  margin-top: 2rem;
}

.accordion-item {
  border-top: 1px solid var(--vp-c-divider);
}

.accordion-header {
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1rem;
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
