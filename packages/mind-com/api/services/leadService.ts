// packages/mind-com/api/services/leadService.ts

import { pipedriveService } from "./pipedriveService"
import type { LeadData, Lead } from "../types"

// Маппинг полей лида для Pipedrive
const PIPEDRIVE_LEAD_MAPPING = {
  // Кастомные поля Pipedrive (хардкоды вынесены в конфиг)
  CATEGORY_FIELD: "ec30e5d548a40d6588bf2e1f06ec07cca7b4cc77",
  MESSAGE_FIELD: "381414c380220bf1d26ce7b7bdc6e6ff08e20e04",
  LEAD_SOURCE_FIELD: "da3aa18ff6128966544ff359f07aebedc047b2e2",
}

export class LeadService {
  /**
   * Создает лид в CRM
   */
  async createLead(leadData: LeadData): Promise<Lead> {
    try {
      // Преобразуем данные в формат Pipedrive
      const pipedriveData = await this.mapToPipedriveFormat(leadData)

      // Создаем лид через Pipedrive API
      const pipedriveLead = await pipedriveService.createLead(pipedriveData)

      // Преобразуем ответ в наш формат
      return this.mapFromPipedriveFormat(pipedriveLead, leadData)
    } catch (error) {
      console.error("LeadService.createLead error:", error)
      throw new Error(`Failed to create lead: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  /**
   * Преобразует наши данные в формат Pipedrive
   */
  private async mapToPipedriveFormat(leadData: LeadData): Promise<any> {
    const pipedriveData: any = {
      title: leadData.title,
      was_seen: true,
    }

    // Добавляем person_id если есть
    if (leadData.personId) {
      pipedriveData.person_id = leadData.personId
    }

    // Резолвим channel через API Pipedrive
    if (leadData.channel) {
      try {
        const channelId = await pipedriveService.resolveCustomFieldId("channel", leadData.channel)
        pipedriveData.channel = channelId
      } catch (error) {
        console.warn(`Failed to resolve channel "${leadData.channel}":`, error)
        // Не падаем, просто логируем предупреждение
      }
    }

    // Добавляем остальные поля
    if (leadData.channelId) {
      pipedriveData.channel_id = leadData.channelId
    }

    if (leadData.originId) {
      pipedriveData.origin_id = leadData.originId
    }

    // Добавляем кастомные поля
    if (leadData.category) {
      pipedriveData[PIPEDRIVE_LEAD_MAPPING.CATEGORY_FIELD] = leadData.category
    }

    if (leadData.message) {
      pipedriveData[PIPEDRIVE_LEAD_MAPPING.MESSAGE_FIELD] = leadData.message
    }

    if (leadData.leadSource) {
      pipedriveData[PIPEDRIVE_LEAD_MAPPING.LEAD_SOURCE_FIELD] = leadData.leadSource
    }

    return pipedriveData
  }

  /**
   * Преобразует данные Pipedrive в наш формат
   */
  private mapFromPipedriveFormat(pipedriveLead: any, originalData: LeadData): Lead {
    return {
      id: pipedriveLead.id,
      title: originalData.title,
      personId: originalData.personId,
      channel: originalData.channel,
      channelId: originalData.channelId,
      originId: originalData.originId,
      category: originalData.category,
      message: originalData.message,
      leadSource: originalData.leadSource,
      status: originalData.status,
      createdAt: pipedriveLead.add_time || new Date().toISOString(),
      updatedAt: pipedriveLead.update_time || new Date().toISOString(),
    }
  }
}
