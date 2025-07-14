import type { Component } from "vue"

import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import FeatureCards from "./FeatureCards.vue"
import BenefitsList from "./BenefitsList.vue"
import AIChat from "./AIChat/AIChat.vue"
import FeatureBlock from "./FeatureBlock.vue"
import NavButton from "./NavButton.vue"
import SearchInput from "./AIChat/SearchInput.vue"
import HeroSection from "./HeroSection.vue"
import PricingPlans from "./PricingPlans.vue"
import AccordionGroup from "./AccordionGroup.vue"
import AutoScrollTestimonials from "./AutoScrollTestimonials.vue"
import ImageGrid from "./ImageGrid.vue"
import TeamMembersGrid from "./TeamMembersGrid.vue"
import HomeFooter from "./HomeFooter.vue"
import ContactFormModalNav from "./CRM/ContactFormModalNav.vue"

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
  ContactFormModalNav,
}
