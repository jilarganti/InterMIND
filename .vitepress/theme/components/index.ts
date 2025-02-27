import type { Component } from "vue"

import TypeForm from "./TypeForm.vue"
import HomeSponsors from "./HomeSponsors.vue"
import AsideSponsors from "./AsideSponsors.vue"
import ImageGrid from "./ImageGrid.vue"
import LogoGrid from "./LogoGrid.vue"
import Button from "./Button.vue"
import TableWrapper from "./TableWrapper.vue"
import ContactForm from "./ContactForm.vue"
import FeatureCards from "./FeatureCards.vue"
import FeatureCard from "./FeatureCard.vue"
import BenefitsList from "./BenefitsList.vue"

import ModalDemo from "./ModalDemo.vue"
import ContactFormModal from "./ContactFormModal.vue"

interface Components {
  [key: string]: Component
}

export const components: Components = {
  TypeForm,
  HomeSponsors,
  AsideSponsors,
  ImageGrid,
  LogoGrid,
  Button,
  TableWrapper,
  ContactForm,
  FeatureCards,
  FeatureCard,
  BenefitsList,

  ModalDemo,
  ContactFormModal,
}
