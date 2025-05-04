<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<template>
  <div class="flex flex-col sm:flex-row">
    <NuxtLink
      v-for="locale2 in availableLocales"
      :key="locale2.code"
      class="p-2"
      :to="switchLocalePath(locale2.code)"
    >
      {{ locale2.name }}
    </NuxtLink>
  </div>
</template>
