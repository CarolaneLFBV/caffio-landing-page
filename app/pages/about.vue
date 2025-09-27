<template>
  <main>
    <AppNavbar />

    <section class="py-20 bg-gradient-to-br from-warm-white to-cream">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-dark-roast mb-6">
          About Caffio
        </h1>
        <p class="text-lg text-coffee-brown mb-8">
          The story behind your personal coffee sommelier
        </p>
        <div class="mt-8">
          <nuxt-link
            to="/"
            class="inline-flex items-center justify-center px-6 py-3 bg-coffee-brown text-white font-semibold rounded-xl hover:bg-dark-roast transition-all duration-300 transform hover:-translate-y-1"
          >
          ← Back to Home
          </nuxt-link>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-dark-roast mb-8 text-center">Our Mission</h2>
          <div class="bg-cream rounded-xl p-8">
            <p class="text-espresso leading-relaxed text-lg text-center">
              Caffio was created with a simple vision: <strong>democratize the art of coffee</strong> by making the secrets of the best baristas accessible to everyone, while respecting your privacy.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-2xl font-bold text-coffee-brown mb-6">🤖 AI Innovation</h3>
            <p class="text-espresso leading-relaxed mb-4">
              Caffio uses Apple Intelligence to create personalized recipes that adapt to your tastes, equipment, and expertise level.
            </p>
            <p class="text-espresso leading-relaxed">
              Unlike other applications, all processing happens directly on your device, ensuring complete privacy.
            </p>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-coffee-brown mb-6">🔒 Privacy Respect</h3>
            <p class="text-espresso leading-relaxed mb-4">
              We firmly believe that your data belongs to you. That's why Caffio doesn't collect any personal information.
            </p>
            <p class="text-espresso leading-relaxed">
              All your recipes, photos, and preferences stay exclusively on your device.
            </p>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-dark-roast mb-8 text-center">The Team</h2>
          <div class="bg-warm-white rounded-xl p-8 text-center">
            <div class="mb-6">
              <h3 class="text-xl font-bold text-coffee-brown mb-2">Carolane Lefebvre</h3>
              <p class="text-espresso mb-4">Founder & Developer</p>
              <p class="text-espresso leading-relaxed">
                iOS developer and founder of Keepio and Caffio, Carolane created this app to help both coffee beginners and experts gather their most beautiful creations and find inspiration for their coffee journey.
              </p>
            </div>
            <div class="text-center">
              <p class="text-sm text-coffee-brown font-semibold italic">
                "Great coffee starts with understanding your unique taste journey"
              </p>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-dark-roast mb-8 text-center">Why Caffio?</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">☕</div>
              <h3 class="text-lg font-bold text-coffee-brown mb-3">Accessible Expertise</h3>
              <p class="text-espresso text-sm">
                Professional barista techniques adapted to your level and equipment
              </p>
            </div>

            <div class="text-center">
              <div class="text-4xl mb-4">🎯</div>
              <h3 class="text-lg font-bold text-coffee-brown mb-3">AI Personalization</h3>
              <p class="text-espresso text-sm">
                Unique recipes generated specifically for your tastes and preferences
              </p>
            </div>

            <div class="text-center">
              <div class="text-4xl mb-4">📱</div>
              <h3 class="text-lg font-bold text-coffee-brown mb-3">100% Local</h3>
              <p class="text-espresso text-sm">
                All your data stays on your device, no external servers
              </p>
            </div>
          </div>
        </div>

        <div class="text-center bg-coffee-50 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-dark-roast mb-4">Join the Adventure</h2>
          <p class="text-espresso leading-relaxed mb-6">
            Caffio is more than an app, it's a community of coffee enthusiasts who share the love of perfect coffee.
          </p>
          <a
            href="https://apps.apple.com/app/caffio"
            class="inline-flex items-center justify-center px-8 py-4 bg-coffee-brown text-white font-semibold rounded-xl hover:bg-dark-roast transition-all duration-300 transform hover:-translate-y-1"
          >
Download Caffio
          </a>
        </div>

      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
useHead({
  title: 'About - Caffio | The Story of Your AI Coffee Sommelier',
  meta: [
    {
      name: 'description',
      content: 'Discover the story of Caffio, the coffee app that respects your privacy. Created by Carolane Lefebvre, Caffio uses Apple Intelligence for 100% local personalized recipes.'
    },
    {
      name: 'keywords',
      content: 'Caffio about, Caffio story, Carolane Lefebvre, Okorp, AI coffee, Apple Intelligence, privacy'
    },
    {
      property: 'og:title',
      content: 'About Caffio - Your AI Coffee Sommelier'
    },
    {
      property: 'og:description',
      content: 'The story behind Caffio, the coffee app that revolutionizes your coffee experience while respecting your privacy.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://caffio.fr/about'
    }
  ]
})
</script>