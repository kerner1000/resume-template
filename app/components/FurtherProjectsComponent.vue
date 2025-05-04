<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { reactive, watch } from 'vue'
type CvTimelineItem = {
  date: { start: string, end?: string }
  title: string
  content?: string
  skills?: string[]
  web?: string[]
}
const { locale } = useI18n()

const items = reactive({ items: Array<CvTimelineItem>() })
const loadCvItems = async () => {
  if (locale.value === 'de') {
    const data = await import('@/data/further-projects-de.json')
    items.items = data.default.items
  } else {
    const data = await import('@/data/further-projects-en.json')
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
    <CvTimeline
      :items="items.items"
      :title="$t('further-projects')"
      :highlight-first-current="false"
    />
  </div>
</template>

<style scoped>

</style>
