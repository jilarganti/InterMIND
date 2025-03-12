import type { Component } from "vue"

import TypeForm from "./TypeForm.vue"
import HomeSponsors from "./HomeSponsors.vue"
import AsideSponsors from "./AsideSponsors.vue"
import ImageGrid from "./ImageGrid.vue"
import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import TableWrapper from "./TableWrapper.vue"
import FeatureCards from "./FeatureCards.vue"
import FeatureCard from "./FeatureCard.vue"
import BenefitsList from "./BenefitsList.vue"

import ContactFormModal from "./CRM/ContactFormModal.vue"

import AIChat from "./AIChat/AIChat.vue"
// import ChatLayout from "./AIChat/ChatLayout.vue"
// import DesktopChatLayout from "./AIChat/DesktopChatLayout.vue"

// import ChatLayoutNew from "./AIChat/ChatLayout.vue"

interface Components {
  [key: string]: Component
}

export const components: Components = {
  HomeSponsors,
  AsideSponsors,
  ImageGrid,
  LogoGrid,
  Button,
  TableWrapper,
  FeatureCards,
  FeatureCard,
  BenefitsList,
  AIChat,
  // ChatLayout,
  // DesktopChatLayout,

  ContactFormModal,
  TypeForm,
}
