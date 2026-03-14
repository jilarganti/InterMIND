import type { Component } from "vue"
import { defineAsyncComponent } from "vue"

import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import FeatureCards from "./FeatureCards.vue"
import BenefitsList from "./BenefitsList.vue"
import FeatureBlock from "./FeatureBlock.vue"
import NavButton from "./NavButton.vue"
import HeroSection from "./HeroSection.vue"
import PricingPlans from "./PricingPlans.vue"
import AccordionGroup from "./AccordionGroup.vue"
import AutoScrollTestimonials from "./AutoScrollTestimonials.vue"
import ImageGrid from "./ImageGrid.vue"
import TeamMembersGrid from "./TeamMembersGrid.vue"
import HomeFooter from "./HomeFooter.vue"

// Lazy-load heavy components only when used
const AIChat = defineAsyncComponent(() => import("./AIChat/AIChat.vue"))
const SearchInput = defineAsyncComponent(() => import("./AIChat/SearchInput.vue"))

interface Components {
  [key: string]: Component
}

export const components: Components = {
  LogoGrid,
  Button,
  FeatureCards,
  BenefitsList,
  AIChat,
  FeatureBlock,
  NavButton,
  SearchInput,
  HeroSection,
  PricingPlans,
  AccordionGroup,
  AutoScrollTestimonials,
  ImageGrid,
  TeamMembersGrid,
  HomeFooter,
}
