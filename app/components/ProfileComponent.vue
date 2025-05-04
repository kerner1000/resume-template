<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <UCard class="">
    <template
      #header
    >
      <div class="uppercase font-semibold p-0">
        {{ t('profile') }}
      </div>
    </template>
    <div>{{ t('profile-content') }}</div>
  </UCard>
</template>
