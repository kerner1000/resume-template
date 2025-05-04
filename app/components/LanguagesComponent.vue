<script setup lang="ts">

</script>

<template>
  <div>
    <UCard>
      <template #header>
        <div class="uppercase font-semibold">
          {{ $t('languages') }}
        </div>
      </template>

      <!-- Languages List -->
      <div class="space-y-4 text-xs">
        <!-- German -->
        <div>
          <span>{{ $t("lang-de") }}</span>
          <div class="relative h-2  rounded">
            <div
              style="width: 100%;"
              class="absolute top-0 left-0 h-2 bg-primary-400 rounded"
            />
          </div>
        </div>

        <!-- English -->
        <div>
          <span>{{ $t("lang-en") }}</span>
          <div class="relative h-2 bg-gray-300 rounded">
            <div
              style="width: 80%;"
              class="absolute top-0 left-0 h-2 bg-primary-400 rounded"
            />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>

<style scoped>

</style>
