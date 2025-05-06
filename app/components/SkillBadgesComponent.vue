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
    </span>
  </div>
</template>

<style scoped>

</style>
