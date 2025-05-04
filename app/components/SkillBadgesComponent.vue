<script setup lang="ts">
defineProps<{
  skills: string[]
}>()
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <span
      v-for="(skill, index) in skills"
      :key="index"
    >
      <span class="">
        <UBadge class="bg-primary-400">{{ skill }}</UBadge>
      </span>
    </span>
  </div>
</template>

<style scoped>

</style>
