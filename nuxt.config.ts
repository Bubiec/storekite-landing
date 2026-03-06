export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  future: { compatibilityVersion: 4 },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap' },
      ],
    },
  },

  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'pl', language: 'pl-PL', file: 'pl.json', name: 'Polski' },
    ],
    lazy: true,
    langDir: '../app/i18n',
    detectBrowserLanguage: false,
    compilation: {
      jit: true,
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },

  routeRules: {
    '/': { isr: 3600 },
    '/pl': { isr: 3600 },
    '/pl/**': { isr: 3600 },
    '/privacy': { isr: 3600 },
    '/terms': { isr: 3600 },
  },
})
