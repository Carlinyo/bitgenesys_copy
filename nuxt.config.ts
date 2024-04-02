// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/main.scss',
    '@oruga-ui/oruga-next/src/scss/oruga-full-vars.scss'
  ],
  app: {
    head: {
      title: 'BitGenesis: Shaping the Future of Blockchain Innovation',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi'
        },
        {
          name: 'description',
          content:
            'Join BitGenesis, a pioneer in blockchain innovation, and embark on a journey to the next dimension of digital finance. Our innovation, incubation, and elevation services empower visionary entrepreneurs for a brighter blockchain future'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'og:title',
          content: 'BitGenesis: Shaping the Future of Blockchain Innovation'
        },
        {
          name: 'og:description',
          content:
            'Join BitGenesis, a pioneer in blockchain innovation, and embark on a journey to the next dimension of digital finance. Our innovation, incubation, and elevation services empower visionary entrepreneurs for a brighter blockchain future'
        },
        {
          name: 'og:type',
          content: 'website'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
