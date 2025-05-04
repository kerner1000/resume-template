<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row absolute top-4 right-4 print:hidden">
      <LangSwitcher />
      <UColorModeButton />
    </div>
    <FotoAndName />
    <div class="flex flex-col sm:flex-row">
      <Left
        class="md:max-w-1/3 m-4"
        m-4
      />
      <div class="">
        <Profile class="m-4" />
        <EmploymentHistory class="m-4" />
        <Education
          class="m-4 print:break-before-page
"
        />
        <FurtherProjects class="m-4" />
        <Certificates class="m-4 print:break-before-page" />
      </div>
    </div>
  </div>
</template>
