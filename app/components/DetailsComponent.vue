<script setup lang="ts">

</script>

<template>
  <div>
    <UCard>
      <template #header>
        <div class="uppercase font-semibold">
          {{ $t('details-label') }}
        </div>
      </template>
      <ul class="space-y-2 text-sm">
        <li class="flex items-center gap-3">
          <Icon
            name="lucide:map-pin"
            class="text-primary-400"
          />
          <div>
            <span class="block ">{{ $t("location") }}</span>
          </div>
        </li>
        <li class="flex items-center gap-3">
          <Icon
            name="lucide:phone"
            class="text-primary-400"
          />

          <div>
            <span class="block ">{{ $t("phone") }}</span>
          </div>
        </li>
        <li class="flex items-center gap-3">
          <Icon
            name="lucide:mail"
            class="text-primary-400"
          />

          <div>
            <span class="block ">myMail@mail.com</span>
          </div>
        </li>
        <li class="flex items-center gap-3">
          <Icon
            name="lucide:cake"
            class="text-primary-400"
          />

          <div>
            <span class="block ">{{ $t("date-of-birth") }}</span>
          </div>
        </li>
        <li class="flex items-center gap-3">
          <Icon
            name="lucide:globe"
            class="text-primary-400"
          />

          <div>
            <span class="block ">{{ $t('nationality') }}</span>
          </div>
        </li>
      </ul>
    </UCard>
  </div>
</template>

<style scoped>

</style>
