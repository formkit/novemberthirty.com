// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'NovemberThirty - Podcast',
      meta: [
        { name: 'description', content: 'A podcast documenting the transition to a post-AI world, hosted by Andrew and Justin.' },
        { property: 'og:title', content: 'NovemberThirty - Podcast' },
        { property: 'og:description', content: 'A podcast documenting the transition to a post-AI world, hosted by Andrew and Justin.' },
        { property: 'og:image', content: '/img/n30-small.jpeg' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/img/n30-small.jpeg' }
      ]
    }
  }
})
