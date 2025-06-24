<script setup lang="ts">
import { computed, ref, onMounted, useSlots } from "vue"
import { typewriter } from "../utils/animations"
import { manageLocalFlag } from "../utils/brawserStorageHelper"

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  typingSpeed: { type: Number, default: 50 }, // Optional: speed in ms
  textDelay: { type: Number, default: 200 }, // Optional: initial delay before animations start
})

// Check if default slot is provided to determine whether to show buttons
const slots = useSlots()
const hasButtonSlot = computed(() => !!slots.default)

// Regex to find text enclosed in double asterisks
const regex = /\*\*(.*?)\*\*/g

// Computed property to style the word(s) enclosed in ** **
const styledTitle = computed(() => props.title.replace(regex, '<span class="highlighted-word">$1</span>'))
const styledText = computed(() => props.text.replace(regex, '<span class="hl">$1</span>'))

// Determine animation state internally
const initialAnimationState = manageLocalFlag("heroSectionAnimated", "true")
const shouldPlayHeroAnimation = ref(initialAnimationState === undefined) // This will be true only on first visit

const displayedTitle = ref(styledTitle.value) // Показывать title сразу, без анимации
const displayedText = ref("")
const showActions = ref(false)

onMounted(async () => {
  if (shouldPlayHeroAnimation.value) {
    // Apply initial delay if textDelay is set
    if (props.textDelay > 0) {
      await new Promise((resolve) => setTimeout(resolve, props.textDelay))
    }

    // Animate only text
    await typewriter(styledText.value, displayedText, props.typingSpeed)

    // Show actions after text animation completes
    showActions.value = true
  } else {
    displayedText.value = styledText.value // Show text immediately
    showActions.value = true // Show actions immediately too
  }
})
</script>

<template>
  <section class="hero-section">
    <!-- Use v-html to render the styled title -->
    <h1 class="hero-title" v-html="displayedTitle"></h1>
    <h2 class="hero-text" v-html="displayedText"></h2>

    <!-- Only apply transition when shouldPlayHeroAnimation is true -->
    <Transition :name="shouldPlayHeroAnimation ? 'fade-slide-up' : ''">
      <div v-if="showActions && hasButtonSlot" class="hero-actions">
        <slot></slot>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.hero-section {
  text-align: center;
  /* margin: 8rem 0; */
  margin-bottom: 4rem;
  width: 100%; /* Ensure it takes full available width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

.hero-title {
  font-size: calc(2.8rem + 1.2vw);
  font-weight: 700;
  line-height: 1.2;
  margin-top: 6rem;
}

.hero-text {
  font-size: calc(1rem + 0.5vw);
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-top: calc(0.5rem + 0.5vw);
}

.hero-title :deep(.highlighted-word) {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: calc(2rem + 1.2vw);
}

/* Add this rule to remove underline from VPButtons within hero actions */
/* .hero-actions :deep(.VPButton) {
  text-decoration: none; 
} */

@media (max-width: 640px) {
  .hero-title {
    font-size: 2.5rem;
    overflow-wrap: break-word;
  }

  .hero-text {
    font-size: 1.2rem;
    overflow-wrap: break-word;
  }

  .hero-actions {
    margin-top: 2.5rem; /* Use fixed margin for smaller screens */
  }
}

/* Styles for the fade-slide-up transition */
.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-slide-up-enter-from,
.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
