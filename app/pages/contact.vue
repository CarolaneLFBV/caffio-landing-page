<template>
  <main>
    <AppNavbar />

    <section class="py-20 bg-gradient-to-br from-warm-white to-cream">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-dark-roast mb-6">
          Contact Us
        </h1>
        <p class="text-lg text-coffee-brown mb-8">
          A question? A suggestion? We're here to help!
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

        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 class="text-2xl font-bold text-dark-roast mb-6">Contact Information</h2>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="text-2xl">📧</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">Email</h3>
                  <a href="mailto:caffio@okorp.fr" class="text-espresso hover:text-coffee-brown underline">
                    caffio@okorp.fr
                  </a>
                  <p class="text-sm text-espresso mt-1">We respond within 24h</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="text-2xl">👩‍💻</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">Developer</h3>
                  <p class="text-espresso">Carolane Lefebvre</p>
                  <p class="text-sm text-espresso mt-1">Founder and creator of Caffio</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="text-2xl">🏢</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">Company</h3>
                  <p class="text-espresso">Okorp</p>
                  <p class="text-sm text-espresso mt-1">Privacy-respecting application development</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="text-2xl">🌐</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">Website</h3>
                  <a href="https://caffio.app" class="text-espresso hover:text-coffee-brown underline">
                    https://caffio.app
                  </a>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-accent-50 border border-accent-200 rounded-xl">
              <h3 class="font-semibold text-accent-700 mb-3">🕒 Response Time</h3>
              <p class="text-espresso text-sm">
                We commit to responding to all emails within 24 hours. For urgent questions, feel free to mention it in your message subject.
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-dark-roast mb-6">Common Topics</h2>

            <div class="space-y-4">
              <div class="p-4 bg-warm-white rounded-xl">
                <h3 class="font-semibold text-coffee-brown mb-2">🆘 Technical Support</h3>
                <p class="text-espresso text-sm">
                  Bug reports, functionality issues, feature questions
                </p>
              </div>

              <div class="p-4 bg-warm-white rounded-xl">
                <h3 class="font-semibold text-coffee-brown mb-2">💡 Suggestions</h3>
                <p class="text-espresso text-sm">
                  Improvement ideas, new features, user feedback
                </p>
              </div>

              <div class="p-4 bg-warm-white rounded-xl">
                <h3 class="font-semibold text-coffee-brown mb-2">🔒 Privacy</h3>
                <p class="text-espresso text-sm">
                  Questions about data protection and privacy
                </p>
              </div>

              <div class="p-4 bg-warm-white rounded-xl">
                <h3 class="font-semibold text-coffee-brown mb-2">🤝 Partnerships</h3>
                <p class="text-espresso text-sm">
                  Collaborations, integrations, professional projects
                </p>
              </div>

              <div class="p-4 bg-warm-white rounded-xl">
                <h3 class="font-semibold text-coffee-brown mb-2">📱 Compatibility</h3>
                <p class="text-espresso text-sm">
                  Questions about supported devices and requirements
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-2xl font-bold text-dark-roast mb-6 text-center">Before contacting us</h2>
          <div class="bg-coffee-50 rounded-xl p-8">
            <p class="text-espresso leading-relaxed mb-4">
              To help us better respond to you, here are some useful information to include in your message:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2">
              <li><strong>App version:</strong> You can find it in Settings > About</li>
              <li><strong>Device model:</strong> iPhone 15, iPad Pro, etc.</li>
              <li><strong>iOS version:</strong> Settings > General > About</li>
              <li><strong>Detailed description:</strong> The more precise, the better we can help!</li>
              <li><strong>Steps to reproduce:</strong> If it's a bug, how to trigger it?</li>
            </ul>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-2xl font-bold text-dark-roast mb-6 text-center">Already have the app?</h2>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="text-center">
              <div class="text-4xl mb-4">⚙️</div>
              <h3 class="text-lg font-bold text-coffee-brown mb-3">Built-in Support</h3>
              <p class="text-espresso text-sm">
                Access support directly from the app: Settings > Help & Support
              </p>
            </div>

            <div class="text-center">
              <div class="text-4xl mb-4">⭐</div>
              <h3 class="text-lg font-bold text-coffee-brown mb-3">App Store Review</h3>
              <p class="text-espresso text-sm">
                Your review helps us tremendously! Feel free to rate the app on the App Store
              </p>
            </div>
          </div>
        </div>

        <div class="text-center bg-cream rounded-xl p-8">
          <h2 class="text-2xl font-bold text-dark-roast mb-4">Caffio Community</h2>
          <p class="text-espresso leading-relaxed mb-6">
            Join our growing community of coffee enthusiasts. Share your creations, discover new techniques, and connect with other lovers of perfect coffee.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/fr/app/caffio/id6753070040?l=en-GB"
              class="inline-flex items-center justify-center px-6 py-3 bg-coffee-brown text-white font-semibold rounded-xl hover:bg-dark-roast transition-all duration-300 transform hover:-translate-y-1"
            >
Download Caffio
            </a>
            <nuxt-link
              to="/qa"
              class="inline-flex items-center justify-center px-6 py-3 bg-white text-coffee-brown font-semibold rounded-xl border-2 border-coffee-brown hover:bg-coffee-brown hover:text-white transition-all duration-300"
            >
View Q&A
            </nuxt-link>
          </div>
        </div>

      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
useHead({
  title: 'Contact - Caffio | Contact Your AI Coffee App Team',
  meta: [
    {
      name: 'description',
      content: 'Contact the Caffio team for any questions, suggestions, or technical support. Carolane Lefebvre and the Okorp team are here to help with your coffee experience.'
    },
    {
      name: 'keywords',
      content: 'Caffio contact, Caffio support, Carolane Lefebvre, Okorp, AI coffee help, developer contact'
    },
    {
      property: 'og:title',
      content: 'Contact the Caffio Team - Support and Questions'
    },
    {
      property: 'og:description',
      content: 'A question about Caffio? Contact our dedicated team for personalized support and quick answers.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://caffio.app/contact'
    }
  ]
})
</script>