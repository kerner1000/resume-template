<script lang="ts">

</script>

<template>
  <div class="flex flex-col items-center">
    <img
      class="w-24 sm:w-36 rounded-full m-2"
      src="/profile.png"
      alt="profile picture"
    >
    <div class="text-lg sm:text-xl uppercase p-1">
      {{ $t('name') }}
    </div>
    <ContactDetailsComponent />
  </div>
</template>
