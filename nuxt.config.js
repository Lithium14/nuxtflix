import fr from './locales/fr.json';
import en from './locales/en.json';
const locales = ['fr', 'en']

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - vueflix',
    title: 'Nuxtflix',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'nuxt-i18n',
  ],
  i18n: {
    locales,
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true
    },
    strategy: 'no_prefix',
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        fr
      }
    }
  },


  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    optionsPath: './vuetify.options.js',
    defaultAssets: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
