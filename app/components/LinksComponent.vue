<script setup lang="ts">
import linksList from '~~/data/links.json'
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
          class=""
        ><div
class="inline-block transition duration-200 transform origin-left
hover:scale-105 hover:underline cursor-pointer hover:text-primary-500">
          <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class=""
          >
            {{ link.label }}
          </a>
        </div>
        </li>
      </ul>
    </UCard>
  </div>
</template>

<style scoped>

</style>
