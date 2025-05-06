<script setup lang="ts">

import { useI18n } from 'vue-i18n'

import { reactive, watch } from 'vue'

type EduItem = {
  date: { start: string, end?: string }
  title: string
  content?: string
  skills?: string[]
  web?: string[]
}

const { locale } = useI18n()

const items = reactive({ items: Array<EduItem>() })
const loadCvItems = async () => {
  if (locale.value === 'de') {
    const data = await import('~~/data/education-de.json')
    items.items = data.default.items
  } else {
    const data = await import('~~/data/education-en.json')
    items.items = data.default.items
  }
}
watch(locale, () => {
  loadCvItems()
})

loadCvItems()
</script>

<template>
  <div>
    <TimelineComponent
      :items="items.items"
      :title="$t('education')"
      :highlight-first-current="false"
      :show-separator="true"
    />
  </div>
</template>

<style scoped>

</style>
