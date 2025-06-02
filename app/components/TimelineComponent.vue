<script setup lang="ts">
type CvTimelineItem = {
  date: { start: string, end?: string }
  title: string
  content?: string
  skills?: string[]
  web?: string[]
}

const props = defineProps<{
  items: Array<CvTimelineItem>
  title: string
  highlightFirstCurrent?: boolean
  showSeparator?: boolean

}>()
</script>

<template>
  <UCard>
    <template #header>
      <div class="uppercase font-semibold">
        <div>
          {{ title }}
        </div>
      </div>
    </template>
    <ol class="sm:relative sm:border-s-4 bg-default">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="sm:ms-12 break-inside-avoid"
      >
        <div
          class="sm:absolute sm:flex sm:flex-col sm:w-22 sm:h-20 sm:-start-12 overflow-hidden"
        >
          <div class="text-xs rounded-lg sm:border bg-default flex sm:flex-col items-center">
            <div class="">
              {{ item.date.start }}
            </div>
            <div
              v-if="item.date.end && item.date.end.trim() !== ''"
              class="sm:hidden"
            >
              &nbsp;-&nbsp;
            </div>
            <div
              v-if="!props.highlightFirstCurrent || index !== 0"

              class=""
            >
              {{ item.date.end }}
            </div>
            <div
              v-if="props.highlightFirstCurrent && index === 0"

              class="p-1"
            >
              <UBadge class="bg-primary-400">
                {{ $t('current') }}
              </UBadge>
            </div>
          </div>
        </div>
        <div class="font-semibold pb-1">
          <span>{{ item.title }}</span>
        </div>
        <div class="pb-1">
          {{ item.content }}
        </div>
        <SkillBadgesComponent
          :skills="item.skills"
          class="pb-1"
        />
        <div
          v-if="item.web && item.web.length"
          class=""
        >
          <div
            v-for="(link, linkIdx) in item.web"
            :key="linkIdx"
            class="text-sm pb-1"
          >
            <a
              :href="link"
              class="inline-block transition duration-200 transform origin-left
hover:scale-105 hover:underline cursor-pointer hover:text-primary-500 break-all max-w-full truncate
"
              rel="noopener noreferrer"
              target="_blank"
            >{{ link }}</a>
          </div>
        </div>
        <div
          v-if="props.showSeparator !== false && index < props.items.length - 1"
          class="p-4"
        >
          <USeparator />
        </div>
      </li>
    </ol>
  </UCard>
</template>

<style scoped>

</style>
