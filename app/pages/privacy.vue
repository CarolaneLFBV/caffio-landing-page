<template>
  <main>
    <AppNavbar />
    <section class="py-20 bg-gradient-to-br from-warm-white to-cream">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl font-bold text-dark-roast mb-6">
          Privacy Policy
        </h1>
        <p class="text-lg text-coffee-brown">
          Last updated: September 2025
        </p>
        <div class="mt-6 p-4 bg-accent-50 border border-accent-200 rounded-xl">
          <p class="text-sm text-accent-700 font-semibold">
            🔒 Privacy-First Design: All your data stays on your device
          </p>
        </div>
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
        <div class="prose prose-lg max-w-none">
          <div class="mb-12 bg-cream rounded-xl p-8">
            <h2 class="text-2xl font-bold text-dark-roast mb-6 text-center">✨ Privacy Highlights</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="flex items-start space-x-3">
                <div class="text-2xl">📱</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">100% Local Storage</h3>
                  <p class="text-sm text-espresso">All recipes and photos stay on your device</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="text-2xl">🚫</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">No Data Collection</h3>
                  <p class="text-sm text-espresso">We don't collect any personal information</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="text-2xl">🤖</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">On-Device AI</h3>
                  <p class="text-sm text-espresso">Apple Intelligence processes everything locally</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="text-2xl">🔐</div>
                <div>
                  <h3 class="font-semibold text-coffee-brown mb-1">No Third Parties</h3>
                  <p class="text-sm text-espresso">No analytics, tracking, or external services</p>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">📱 What We Store (Locally on Your Device)</h2>
            <div class="bg-coffee-50 border border-coffee-200 rounded-xl p-6">
              <ul class="list-disc pl-6 text-espresso space-y-2">
                <li><strong>Coffee recipes:</strong> Your created and AI-generated recipes</li>
                <li><strong>Photos:</strong> Images you add to your recipes from camera or photo library</li>
                <li><strong>Favorites:</strong> Recipes you've marked as favorites</li>
                <li><strong>Preferences:</strong> Your taste preferences and equipment settings</li>
                <li><strong>Search history:</strong> Recent searches within the app</li>
              </ul>
              <p class="mt-4 text-sm text-coffee-brown font-semibold">
                💡 All stored using SwiftData in your app's secure container
              </p>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">🚫 What We DON'T Collect</h2>
            <div class="bg-warm-white border border-cream rounded-xl p-6">
              <ul class="list-disc pl-6 text-espresso space-y-2">
                <li><strong>No personal information:</strong> No names, emails, or phone numbers</li>
                <li><strong>No location data:</strong> We never access your location</li>
                <li><strong>No usage analytics:</strong> We don't track how you use the app</li>
                <li><strong>No advertising data:</strong> No ads means no tracking</li>
                <li><strong>No crash reports:</strong> Even errors stay on your device</li>
                <li><strong>No device identifiers:</strong> We don't collect device IDs</li>
              </ul>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">🤖 Apple Intelligence & AI Processing</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Caffio uses Apple Intelligence to generate personalized coffee recipes. Here's how we protect your privacy:
            </p>
            <div class="bg-accent-50 border border-accent-200 rounded-xl p-6 mb-6">
              <h3 class="font-semibold text-accent-700 mb-3">✅ Privacy-Preserving AI</h3>
              <ul class="list-disc pl-6 text-espresso space-y-2">
                <li><strong>On-device processing:</strong> AI runs entirely on your iPhone/iPad</li>
                <li><strong>No data transmission:</strong> Your preferences never leave your device</li>
                <li><strong>Apple's privacy controls:</strong> Subject to Apple's strict privacy standards</li>
                <li><strong>No AI training:</strong> Your data is not used to train AI models</li>
              </ul>
            </div>
            <p class="text-sm text-coffee-brown">
              Learn more about Apple Intelligence privacy in
              <a href="https://www.apple.com/privacy/" class="underline hover:text-accent-500">Apple's Privacy Policy</a>
            </p>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">📸 Camera & Photo Library Access</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Caffio requests permission to access your camera and photo library only to:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2 mb-6">
              <li>Let you take photos of your coffee creations</li>
              <li>Allow you to add existing photos to your recipes</li>
            </ul>
            <div class="bg-cream rounded-xl p-6">
              <h4 class="font-semibold text-coffee-brown mb-2">🔒 Photo Privacy</h4>
              <ul class="text-espresso text-sm space-y-1">
                <li>• Photos are stored only in your app's container</li>
                <li>• Never uploaded, shared, or transmitted anywhere</li>
                <li>• Deleted when you remove the app</li>
                <li>• Not accessible to other apps</li>
              </ul>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">🔐 Data Security</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Since all data stays on your device, your privacy is protected by:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2 mb-6">
              <li><strong>iOS security:</strong> Your data is protected by iOS encryption and security</li>
              <li><strong>App sandboxing:</strong> Data is isolated from other apps</li>
              <li><strong>No network transmission:</strong> No risk of data breaches during transmission</li>
              <li><strong>Device passcode protection:</strong> Protected by your device's security</li>
            </ul>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">🗑️ Deleting Your Data</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Since we don't collect data on our servers, managing your data is simple:
            </p>
            <div class="bg-coffee-50 border border-coffee-200 rounded-xl p-6">
              <h3 class="font-semibold text-coffee-brown mb-3">Complete Data Deletion</h3>
              <p class="text-espresso mb-3">
                To permanently delete all your Caffio data:
              </p>
              <ol class="list-decimal pl-6 text-espresso space-y-1">
                <li>Delete the Caffio app from your device</li>
                <li>All recipes, photos, and preferences are immediately removed</li>
                <li>No data remains on any external servers</li>
              </ol>
            </div>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">🚫 No Third-Party Services</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Caffio is completely self-contained and doesn't use:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2 mb-6">
              <li>Analytics services (Google Analytics, Firebase, etc.)</li>
              <li>Advertising networks</li>
              <li>Social media SDKs</li>
              <li>Crash reporting services</li>
              <li>Cloud storage services</li>
              <li>External APIs (except Apple Intelligence)</li>
            </ul>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">👶 Children's Privacy</h2>
            <p class="text-espresso leading-relaxed mb-4">
              Caffio is safe for users of all ages because:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2 mb-4">
              <li>We don't collect any personal information from anyone</li>
              <li>No account creation or registration required</li>
              <li>No communication features or social elements</li>
              <li>Completely offline functionality</li>
            </ul>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">📝 Changes to This Privacy Policy</h2>
            <p class="text-espresso leading-relaxed mb-4">
              We may update this Privacy Policy to reflect changes in our app or legal requirements.
              Since we don't collect contact information, changes will be communicated through:
            </p>
            <ul class="list-disc pl-6 text-espresso space-y-2 mb-4">
              <li>App Store update descriptions</li>
              <li>Updates to this website</li>
              <li>In-app notifications (for major changes)</li>
            </ul>
          </div>

          <div class="mb-12">
            <h2 class="text-2xl font-bold text-dark-roast mb-4">📧 Contact Us</h2>
            <p class="text-espresso leading-relaxed mb-4">
              If you have questions about this Privacy Policy:
            </p>
            <div class="bg-cream rounded-xl p-6">
              <ul class="text-espresso space-y-2">
                <li><strong>Email:</strong> <a href="mailto:caffio@okorp.fr" class="text-coffee-brown hover:text-accent-500 underline">caffio@okorp.fr</a></li>
                <li><strong>Developer:</strong> Carolane Lefebvre - Okorp</li>
                <li><strong>Website:</strong> <a href="https://caffio.fr" class="text-coffee-brown hover:text-accent-500 underline">https://caffio.fr</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-16 bg-warm-white text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-dark-roast mb-6">
          Privacy-First Coffee Experience
        </h2>
        <p class="text-lg text-coffee-brown mb-8">
          Enjoy AI-powered coffee recipes with complete privacy protection
        </p>
        <nuxt-link
          to="/"
          class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-coffee-brown to-dark-roast text-white font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-1 transition-all duration-300"
        >
          Download Caffio
        </nuxt-link>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
useHead({
  title: 'Privacy Policy - Caffio | Privacy-First AI Coffee App',
  meta: [
    {
      name: 'description',
      content: 'Caffio Privacy Policy: 100% local data storage, no tracking, no data collection. Your coffee recipes and photos never leave your device. Complete privacy protection.'
    },
    {
      name: 'keywords',
      content: 'Caffio privacy policy, privacy-first coffee app, local data storage, no tracking, Apple Intelligence privacy, iOS coffee app privacy'
    },
    {
      property: 'og:title',
      content: 'Privacy-First Coffee App - Caffio Privacy Policy'
    },
    {
      property: 'og:description',
      content: 'Complete privacy protection: All your coffee data stays on your device. No tracking, no data collection, no external servers.'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://caffio.fr/privacy'
    }
  ]
})
</script>