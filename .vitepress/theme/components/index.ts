import type { Component } from "vue"

import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import TableWrapper from "./TableWrapper.vue"
import FeatureCards from "./FeatureCards.vue"
import BenefitsList from "./BenefitsList.vue"
import ContactFormModal from "./CRM/ContactFormModal.vue"
import AIChat from "./AIChat/AIChat.vue"

interface Components {
  [key: string]: Component
}

export const components: Components = {
  LogoGrid,
  Button,
  TableWrapper,
  FeatureCards,
  BenefitsList,
  AIChat,
  ContactFormModal,
}
