<script setup lang="ts">



import { useI18n } from 'vue-i18n'

import { reactive, watch } from 'vue'

type CertificatesItem = {
  title: string
  date: { start: string, end?: string }
}

const { locale } = useI18n()

const items = reactive({ items: Array<CertificatesItem>() })
const loadCvItems = async () => {
  if (locale.value === 'de') {
    const data = await import('@/data/certificates-de.json')
    items.items = data.default.items
  } else {
    const data = await import('@/data/certificates-en.json')
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
      :title="$t('certificates')"
      :highlight-first-current="false"
      :show-separator="false"
    />
  </div>
</template>

<style scoped>

</style>
