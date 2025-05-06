// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@pinia/nuxt'
  ],

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-11-27',

  i18n: {
    defaultLocale: 'en',
    lazy: true,
    locales: [{
      code: 'de',
      name: 'Deutsch',
      file: 'de.json'
    }, {
      code: 'en',
      name: 'English',
      file: 'en.json'
    }]
  }
})