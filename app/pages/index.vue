<script lang="ts" setup>

</script>

<template>
  <div>
    <div class="flex flex-col sm:flex-row absolute top-4 right-4 print:hidden">
      <LangSwitcherComponent />
      <UColorModeButton />
    </div>
    <FotoAndNameComponent />
    <div class="flex flex-col sm:flex-row">
      <LeftComponent
        class="md:max-w-1/3 m-4"
        m-4
      />
      <div class="">
        <ProfileComponent class="m-4" />
        <EmploymentHistoryComponent class="m-4" />
        <EducationComponent
          class="m-4 print:break-before-page"
        />
        <FurtherProjectsComponent class="m-4" />
        <CertificatesComponent class="m-4 print:break-before-page" />
      </div>
    </div>
  </div>
</template>
