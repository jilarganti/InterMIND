import type { Component } from "vue"

import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import FeatureCards from "./FeatureCards.vue"
import BenefitsList from "./BenefitsList.vue"
import ContactFormModal from "./CRM/ContactFormModal.vue"
import ContactFormModalNav from "./CRM/ContactFormModalNav.vue"
import AIChat from "./AIChat/AIChat.vue"
import FeatureBlock from "./FeatureBlock.vue"
import NavButton from "./NavButton.vue"

interface Components {
  [key: string]: Component
}

export const components: Components = {
  LogoGrid,
  Button,
  FeatureCards,
  BenefitsList,
  AIChat,
  ContactFormModal,
  ContactFormModalNav,
  FeatureBlock,
  NavButton,
}
