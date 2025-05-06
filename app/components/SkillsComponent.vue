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
          <UBadge class="bg-primary-400">{{ skill }}</UBadge>
        </span>
      </div>
    </UCard>
  </div>
</template>

<style scoped>

</style>
