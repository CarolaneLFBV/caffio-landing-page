// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/tailwindcss'],

  // Configuration SEO & Performance
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },
  app: {
    head: {
      title: 'Caffio - AI-Powered Coffee Recipe App | Master the Art of Coffee',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Master the art of coffee with Caffio\'s AI-powered recipes and professional brewing guides. Create, discover, and perfect your coffee skills with Apple Intelligence integration.' },
        { name: 'keywords', content: 'coffee recipe app, AI coffee guide, Apple Intelligence, barista app iOS, smart coffee brewing, espresso recipes, coffee maker app, professional coffee guides' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://caffio.app' },
        { property: 'og:title', content: 'Caffio - AI-Powered Coffee Recipe App' },
        { property: 'og:description', content: 'Master the art of coffee with AI-powered recipes and professional brewing guides. Available on the App Store.' },
        { property: 'og:image', content: '/og-image.jpg' },

        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://caffio.app' },
        { property: 'twitter:title', content: 'Caffio - AI-Powered Coffee Recipe App' },
        { property: 'twitter:description', content: 'Master the art of coffee with AI-powered recipes and professional brewing guides.' },
        { property: 'twitter:image', content: '/twitter-image.jpg' },

        // Mobile App
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Caffio' },
        { name: 'theme-color', content: '#8B4513' },

        // SEO & AIO
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'Caffio Team' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: 'https://caffio.app' }
      ]
    }
  },

  // Configuration de @nuxt/image pour l'optimisation des images
  image: {
    quality: 80,
    format: ['webp', 'jpg'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    }
  },

  // Configuration Tailwind CSS pour optimisation des performances
  tailwindcss: {
    // Expose la configuration pour utilisation runtime si nécessaire
    exposeConfig: false, // Garde false pour éviter le +19.5KB au bundle
    // Configuration CSS pour une meilleure performance
    viewer: false, // Désactive le viewer en production
  },
})