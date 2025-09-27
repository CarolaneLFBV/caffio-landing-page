<template>
  <main>
    <AppNavbar />

    <section class="py-20 bg-gradient-to-br from-warm-white to-cream">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-dark-roast mb-6">
          Q&A
        </h1>
        <p class="text-lg text-coffee-brown mb-8">
          Everything you need to know about Caffio
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

        <div class="space-y-6">
          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>What makes Caffio different from other coffee apps?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Caffio is the first coffee app to integrate Apple Intelligence for personalized recipe generation. Unlike traditional apps, Caffio learns your preferences and creates unique suggestions tailored to your taste profile and available equipment.
              </p>
              <p>
                Moreover, Caffio completely respects your privacy: all your data stays on your device, no information is collected or transmitted.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>How does AI recipe generation work?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Our AI analyzes your taste preferences, experience level, and available equipment to create personalized recipes. You can specify whether you prefer strong, mild, sweet coffee, or with specific flavor notes.
              </p>
              <p>
                The AI uses Apple Intelligence, which means all processing happens directly on your iPhone/iPad, ensuring complete confidentiality.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Do I need special equipment to use Caffio?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Not at all! Caffio adapts to any type of equipment, from simple French press to professional espresso machines. The app offers recipes optimized for your available equipment.
              </p>
              <p>
                Whether you have a Nespresso machine, drip coffee maker, French press, or even just a kettle, Caffio has recipes for you.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Is Caffio suitable for beginners?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Absolutely! Caffio is designed for coffee lovers of all levels. Beginners benefit from simple recipes with detailed step-by-step instructions.
              </p>
              <p>
                The app also includes guides on basic techniques, water-to-coffee ratios, and extraction times to help you improve.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Is my data really secure?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Yes, absolutely! Caffio doesn't collect any personal data. All your recipes, photos, preferences, and history are stored exclusively on your device via SwiftData.
              </p>
              <p>
                We don't have access to your information, we don't use analytics, and we don't share anything with third parties. Your privacy is our absolute priority.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>On which devices is Caffio available?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Caffio is available on iPhone and iPad with iOS 17.0 or later. This version is required to benefit from Apple Intelligence features.
              </p>
              <p>
                The app is optimized for all screen sizes and works perfectly on all compatible iPhone and iPad models.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Is Caffio free?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                Caffio is currently completely free to use with access to all recipes and AI-powered features.
              </p>
              <p>
                We're planning to introduce premium features in the future, which will include advanced barista masterclasses, exclusive recipe collections, and enhanced personalization options.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Can I sync my data across multiple devices?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                By design, Caffio stores everything locally to preserve your privacy. Currently, there is no data synchronization between devices.
              </p>
              <p>
                Each device maintains its own local database, ensuring complete privacy and security. This means your recipes, photos, and preferences remain exclusively on each individual device.
              </p>
            </div>
          </details>

          <details class="bg-warm-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>How can I contact support?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <div class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              <p class="mb-4">
                You can contact us in several ways:
              </p>
              <ul class="list-disc pl-6 space-y-2">
                <li>Email: <a href="mailto:caffio@okorp.fr" class="text-coffee-brown hover:text-accent-500 underline">caffio@okorp.fr</a></li>
                <li>Via the <nuxt-link to="/contact" class="text-coffee-brown hover:text-accent-500 underline">Contact</nuxt-link> page on this site</li>
                <li>Directly from the app through settings</li>
              </ul>
              <p class="mt-4">
                We usually respond within 24 hours and are always happy to help our community of coffee enthusiasts!
              </p>
            </div>
          </details>

        </div>

        <div class="mt-16 text-center bg-coffee-50 rounded-xl p-8">
          <h2 class="text-2xl font-bold text-dark-roast mb-4">Have another question?</h2>
          <p class="text-espresso leading-relaxed mb-6">
            Don't hesitate to contact us, we're here to help you perfect your coffee experience!
          </p>
          <nuxt-link
            to="/contact"
            class="inline-flex items-center justify-center px-8 py-4 bg-coffee-brown text-white font-semibold rounded-xl hover:bg-dark-roast transition-all duration-300 transform hover:-translate-y-1"
          >
Contact Us
          </nuxt-link>
        </div>

      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
useHead({
  title: 'Q&A - Caffio | Questions & Answers about Your AI Coffee App',
  meta: [
    {
      name: 'description',
      content: 'Find answers to all your questions about Caffio. Discover how our AI generates personalized coffee recipes while preserving your privacy.'
    },
    {
      name: 'keywords',
      content: 'Caffio FAQ, frequently asked questions, Caffio help, AI coffee recipes, Apple Intelligence, privacy'
    },
    {
      property: 'og:title',
      content: 'Caffio Q&A - All Your Questions About the AI Coffee App'
    },
    {
      property: 'og:description',
      content: 'Answers to the most frequently asked questions about Caffio, your personal coffee sommelier powered by Apple Intelligence.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://caffio.app/qa'
    }
  ]
})
</script>