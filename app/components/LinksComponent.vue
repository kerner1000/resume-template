<script setup lang="ts">
import linksList from '@/data/links.json'
</script>

<template>
  <div>
    <UCard>
      <template #header>
        <div class="uppercase font-semibold">
          Links
        </div>
      </template>
      <ul class="space-y-2">
        <li
          v-for="(link, index) in linksList.links"
          :key="index"
        >
          <a
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="underline hover:text-orange-500 "
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </UCard>
  </div>
</template>

<style scoped>

</style>
