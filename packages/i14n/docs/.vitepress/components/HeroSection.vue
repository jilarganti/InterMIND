<script setup lang="ts">
import { computed, ref, onMounted, type Ref } from "vue"
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue"
import { typewriter } from "../../../../../shared/utils/animations"

interface ActionItem {
  text: string
  link: string
  // Theme can be 'brand', 'alt', 'sponsor' as per VPButton props
  theme: "brand" | "alt" | "sponsor"
}

const props = defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  actions: { type: Array as () => ActionItem[], default: () => [] },
  typingSpeed: { type: Number, default: 50 }, // Optional: speed in ms
  textDelay: { type: Number, default: 200 }, // Optional: delay before text starts typing
  playAnimation: { type: Boolean, default: true }, // New prop to control animation
})

// Regex to find text enclosed in double asterisks
const regex = /\*\*(.*?)\*\*/

// Computed property to style the word(s) enclosed in ** **
const styledTitle = computed(() => props.title.replace(regex, '<span class="highlighted-word">$1</span>'))
const styledText = computed(() => props.text.replace(regex, '<span class="hl">$1</span>'))

const displayedTitle = ref("")
const displayedText = ref("")
const showActions = ref(false)

onMounted(async () => {
  if (props.playAnimation) {
    // Check the new prop to decide whether to animate
    await typewriter(styledTitle.value, displayedTitle, props.typingSpeed)
    // Optional delay before starting to type the text
    if (props.textDelay > 0) {
      await new Promise((resolve) => setTimeout(resolve, props.textDelay))
    }
    await typewriter(styledText.value, displayedText, props.typingSpeed)
  } else {
    displayedTitle.value = styledTitle.value // Show title immediately
    displayedText.value = styledText.value // Show text immediately
  }
  showActions.value = true // Show actions after text is typed or set
})
</script>

<template>
  <section class="hero-section">
    <!-- Use v-html to render the styled title -->
    <h1 class="hero-title" v-html="displayedTitle"></h1>
    <p class="hero-text" v-html="displayedText"></p>
    <Transition name="fade-slide-up">
      <div v-if="actions && actions.length && showActions" class="hero-actions">
        <!-- Use VPButton component -->
        <VPButton v-for="(action, idx) in actions" :key="idx" :text="action.text" :href="action.link" :theme="action.theme" />
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.hero-section {
  text-align: center;
  /* margin: 8rem 0; */
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

.hero-title :deep(.highlighted-word) {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
}

.hero-text {
  font-size: calc(0.6rem + 1.2vw);
  font-weight: 500;
  line-height: 1.5;
  color: var(--vp-c-text-2);
  margin-top: calc(1.5rem + 1.2vw);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: calc(2rem + 1.2vw);
}

/* Add this rule to remove underline from VPButtons within hero actions */
.hero-actions :deep(.VPButton) {
  text-decoration: none; /* Override default link styling */
}

@media (max-width: 640px) {
  .hero-title {
    font-size: 2rem;
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
