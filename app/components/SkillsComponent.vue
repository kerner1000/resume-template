<script setup lang="ts">
import skillsList from '~~/data/skills.json'
</script>

<template>
  <div>
    <UCard>
      <template #header>
        <div class="uppercase font-semibold">
          {{ $t('skills') }}
        </div>
      </template>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(skill, index) in skillsList.skills"
          :key="index"
        >
          <a
              class=""
              :href="`https://www.google.com/search?q=${encodeURIComponent(skill + ' software')}`"
              target="_blank"
              rel="noopener noreferrer"
          >
          <UBadge
              class="bg-primary-400 cursor-pointer hover:underline transition duration-200 transform origin-left
hover:scale-105 ">
            {{ skill }}
          </UBadge>
        </a>
        </span>
      </div>
    </UCard>
  </div>
</template>

<style scoped>

</style>
