<script setup lang="ts">
import PricingPlan from "./PricingPlan.vue"
import { useSlots } from "vue"

interface ImageTheme {
  light: string
  dark: string
  alt?: string
}

interface PricingPlanItem {
  title: string
  price?: string
  details?: string
  items?: string[]
  images?: ImageTheme
  buttonClass?: "brand" | "alt" | "sponsor"
  bullet?: string
}

const props = defineProps<{
  plans: PricingPlanItem[]
}>()

const columns = Math.min(props.plans.length, 3)

const slots = useSlots()
</script>

<template>
  <div class="pricing-plans" :style="{ '--columns': columns }">
    <PricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      :title="plan.title"
      :price="plan.price"
      :details="plan.details"
      :items="plan.items"
      :images="plan.images"
      :buttonClass="plan.buttonClass"
      :bullet="plan.bullet"
    >
      <template #button>
        <!-- Получаем все vnodes из default slot и рендерим только нужный по индексу -->
        <template v-if="slots.default">
          <component :is="slots.default()[index]" v-if="slots.default()[index]" />
        </template>
      </template>
    </PricingPlan>
  </div>
</template>

<style scoped>
.pricing-plans {
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  gap: 32px;
  margin: 48px 0;
}
@media (max-width: 900px) {
  .pricing-plans {
    grid-template-columns: 1fr 1fr;
  }
}
@media (max-width: 600px) {
  .pricing-plans {
    grid-template-columns: 1fr;
  }
}
</style>
