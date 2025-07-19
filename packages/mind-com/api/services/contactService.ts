// packages/mind-com/api/services/contactService.ts

import { pipedriveService } from "./pipedriveService.js"
import type { ContactData, Contact } from "../types/pipedrive.js"

// Маппинг полей контакта для Pipedrive
const PIPEDRIVE_CONTACT_MAPPING = {
  // Кастомные поля Pipedrive (хардкоды вынесены в конфиг)
  WEBSITE_FIELD: "0bcd0dbd7c022bcc908eecd87e72bd49f830e5a6",
  COUNTRY_CODE_FIELD: "08d290c3d972d735278898a71ad674b0ff698c66",
  COUNTRY_NAME_FIELD: "f64198e6b8654dd28a344f5831dbe547b960a17b",
}

export class ContactService {
  /**
   * Создает контакт в CRM
   */
  async createContact(contactData: ContactData): Promise<Contact> {
    try {
      // Преобразуем данные в формат Pipedrive
      const pipedriveData = this.mapToPipedriveFormat(contactData)

      // Создаем контакт через Pipedrive API
      const pipedriveContact = await pipedriveService.createContact(pipedriveData)

      // Преобразуем ответ в наш формат
      return this.mapFromPipedriveFormat(pipedriveContact, contactData)
    } catch (error) {
      console.error("ContactService.createContact error:", error)
      throw new Error(`Failed to create contact: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  /**
   * Преобразует наши данные в формат Pipedrive
   */
  private mapToPipedriveFormat(contactData: ContactData): any {
    const pipedriveData: any = {
      name: contactData.name,
      email: [{ value: contactData.email, label: "other" }],
    }

    // Добавляем кастомные поля если они есть
    if (contactData.website) {
      pipedriveData[PIPEDRIVE_CONTACT_MAPPING.WEBSITE_FIELD] = contactData.website
    }

    if (contactData.countryCode) {
      pipedriveData[PIPEDRIVE_CONTACT_MAPPING.COUNTRY_CODE_FIELD] = contactData.countryCode
    }

    if (contactData.countryName) {
      pipedriveData[PIPEDRIVE_CONTACT_MAPPING.COUNTRY_NAME_FIELD] = contactData.countryName
    }

    if (contactData.phone) {
      pipedriveData.phone = [{ value: contactData.phone, label: "other" }]
    }

    return pipedriveData
  }

  /**
   * Преобразует данные Pipedrive в наш формат
   */
  private mapFromPipedriveFormat(pipedriveContact: any, originalData: ContactData): Contact {
    return {
      id: pipedriveContact.id,
      name: originalData.name,
      email: originalData.email,
      phone: originalData.phone,
      website: originalData.website,
      countryCode: originalData.countryCode,
      countryName: originalData.countryName,
      createdAt: pipedriveContact.add_time || new Date().toISOString(),
      updatedAt: pipedriveContact.update_time || new Date().toISOString(),
    }
  }
}
