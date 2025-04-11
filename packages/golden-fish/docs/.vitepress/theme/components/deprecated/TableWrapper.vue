<script setup lang="ts">
interface TableRow {
  title: string
  year1Cost?: number
  year2Cost?: number
  remarks?: string
  cost?: number
  invoiceLink?: string
  buttonLink?: string
}

interface Props {
  headers: string[]
  rows: TableRow[]
}

defineProps<Props>()

const discount = 0.5

const formatCurrency = (value: number | undefined): string => {
  if (typeof value === "undefined") return ""
  const discountedValue = Math.round((value * discount) / 100) * 100
  return `US$${discountedValue.toLocaleString()}`
}
</script>

<template>
  <table class="vp-doc">
    <thead>
      <tr>
        <th v-for="header in headers" :key="header">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row.title">
        <td>{{ row.title }}</td>
        <!-- Всегда рендерим ячейки, но проверяем содержимое внутри -->
        <td>{{ row.year1Cost !== undefined ? formatCurrency(row.year1Cost) : "" }}</td>
        <td>{{ row.year2Cost !== undefined ? formatCurrency(row.year2Cost) : "" }}</td>
        <td v-html="row.remarks || ''"></td>
        <td>{{ row.cost !== undefined ? formatCurrency(row.cost) : "" }}</td>
        <td>
          <input
            type="hidden"
            :value="
              JSON.stringify({
                price: row.year1Cost,
                entity_name: row.title,
                entity_type: row.title?.toLowerCase().includes('offshore') ? 'offshore' : 'mainland',
              })
            "
            class="fees-data"
          />
          <a :href="row.invoiceLink" class="themed-button" v-if="row.invoiceLink"> View Invoice </a>
          <a v-else-if="row.buttonLink" :href="row.buttonLink" class="button">Click here</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>
