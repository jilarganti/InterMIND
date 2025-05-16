<script setup>
import { ref } from "vue"

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // [{ title: '...', description: '...' }]
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
      <button class="accordion-header" @click="toggle(index)">
        {{ item.title }}
      </button>
      <div class="accordion-content" v-show="openStates[index]">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid #ddd;
  border-radius: 4px;
}

.accordion-item + .accordion-item {
  border-top: 1px solid #ddd;
}

.accordion-header {
  background: #f7f7f7;
  border: none;
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
}

.accordion-header:hover {
  background: #eee;
}

.accordion-content {
  padding: 1rem;
  background: #fff;
  border-top: 1px solid #ddd;
}
</style>
