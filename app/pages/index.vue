<template>
  <main>
    <AppNavbar />
    <section class="min-h-screen flex items-center bg-gradient-to-br from-warm-white to-cream overflow-hidden" aria-label="Caffio Introduction">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div class="space-y-8">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-roast">
              Master the Art of Coffee with
              <span class="bg-gradient-to-r from-coffee-brown to-accent-500 bg-clip-text text-transparent">
                AI-Powered Recipes
              </span>
            </h1>

            <p class="text-lg sm:text-xl text-espresso leading-relaxed max-w-2xl">
              Caffio is your personal coffee sommelier powered by Apple Intelligence.
              Generate unique coffee recipes tailored to your taste, access professional
              brewing guides, and perfect your barista skills with our intelligent iOS app.
            </p>

            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="https://apps.apple.com/app/caffio"
                class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-coffee-brown to-dark-roast text-white font-semibold rounded-xl shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Download Caffio on the App Store"
              >
                Download on the App Store
              </a>
              <a
                href="#features"
                class="inline-flex items-center justify-center px-8 py-4 bg-cream text-coffee-brown font-semibold rounded-xl border-2 border-coffee-brown hover:bg-coffee-brown hover:text-cream transition-all duration-300"
                aria-label="Explore Caffio features"
              >
                Explore Features
              </a>
            </div>

            <div class="inline-block">
              <span class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-accent-500 to-coffee-brown text-white text-sm font-semibold rounded-full">
                <img src="/apple-intelligence.svg" alt="Apple Logo" class="h-4 w-4 mr-2" />
                Powered by Apple Intelligence
              </span>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end">
            <div class="w-80 h-[600px] flex flex-col items-center justify-center text-center relative overflow-hidden">
              <img src="/caffioAppPreview.png" alt="Caffio App Preview"/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="features" class="py-20 bg-white" aria-label="Key Features">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-roast mb-6">
            Professional Coffee Experience at Your Fingertips
          </h2>
          <p class="text-lg sm:text-xl text-coffee-brown max-w-3xl mx-auto leading-relaxed">
            Discover how Caffio transforms your coffee journey with cutting-edge AI technology
          </p>
        </header>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">
              <img src="/apple-intelligence.svg" alt="AI Icon" class="h-12 w-12 mx-auto" />
            </div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">AI-Powered Recipe Creation</h3>
            <p class="text-espresso leading-relaxed">
              Generate unique coffee recipes using Apple Intelligence.
              Our AI understands your taste preferences and creates personalized
              brewing recommendations tailored specifically for you.
            </p>
          </article>

          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">📚</div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">Curated Recipe Library</h3>
            <p class="text-espresso leading-relaxed">
              Access 10+ professional recipes with step-by-step instructions.
              From classic espresso to artisan pour-overs, master techniques
              used by world-class baristas.
            </p>
          </article>

          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">🔍</div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">Intelligent Search & Filter</h3>
            <p class="text-espresso leading-relaxed">
              Find your perfect brew instantly. Search by difficulty,
              preparation time, equipment, or flavor profile. Our smart
              filters help you discover new favorites effortlessly.
            </p>
          </article>

          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">📸</div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">Personal Coffee Library</h3>
            <p class="text-espresso leading-relaxed">
              Build your coffee portfolio with custom photos and notes.
              Track brewing experiments, save favorites, and document
              your journey from beginner to coffee connoisseur.
            </p>
          </article>

          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">⏱️</div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">Professional Brewing Guides</h3>
            <p class="text-espresso leading-relaxed">
              Master precise techniques with detailed timers, temperatures,
              and ratios. Learn the science behind perfect extraction
              for consistently exceptional coffee.
            </p>
          </article>

          <article class="bg-white rounded-2xl p-8 shadow-coffee hover:shadow-coffee-lg transform hover:-translate-y-2 transition-all duration-300 text-center group">
            <div class="text-5xl mb-6 group-hover:animate-brew">☕</div>
            <h3 class="text-xl font-bold text-coffee-brown mb-4">Equipment Optimization</h3>
            <p class="text-espresso leading-relaxed">
              Get recommendations based on your available equipment.
              Whether you have a simple French press or professional
              espresso machine, Caffio adapts to your setup.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 bg-warm-white" aria-label="Frequently Asked Questions">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-roast mb-6">
            Everything You Need to Know About Caffio
          </h2>
          <p class="text-lg sm:text-xl text-coffee-brown leading-relaxed">
            Common questions about our AI-powered coffee app
          </p>
        </header>

        <div class="space-y-6">
          <details class="bg-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>What makes Caffio different from other coffee apps?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              Caffio is the first coffee app to integrate Apple Intelligence
              for personalized recipe generation. Unlike traditional recipe apps,
              Caffio learns your preferences and creates unique brewing suggestions
              tailored to your taste profile and available equipment.
            </p>
          </details>

          <details class="bg-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>How does the AI recipe generation work?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              Our AI analyzes your taste preferences, equipment, and skill level
              to generate custom recipes. Simply input your preferences - like
              strength, sweetness, and flavor notes - and Caffio creates a
              personalized brewing guide optimized for your perfect cup.
            </p>
          </details>

          <details class="bg-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Do I need special equipment to use Caffio?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              No! Caffio adapts to whatever equipment you have. Whether it's a
              basic French press, pour-over setup, or professional espresso machine,
              our app provides recipes and techniques optimized for your specific tools.
            </p>
          </details>

          <details class="bg-white rounded-2xl p-6 shadow-coffee group">
            <summary class="cursor-pointer list-none flex items-center justify-between font-semibold text-lg text-dark-roast hover:text-coffee-brown transition-colors">
              <h3>Is Caffio suitable for beginners?</h3>
              <span class="text-2xl text-coffee-brown group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p class="mt-4 pt-4 border-t border-cream text-espresso leading-relaxed">
              Absolutely! Caffio is designed for coffee lovers at all skill levels.
              Beginners get simple, foolproof recipes with detailed instructions,
              while experienced baristas can explore advanced techniques and
              experimental brewing methods.
            </p>
          </details>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gradient-to-r from-coffee-brown to-dark-roast text-white text-center" aria-label="Download Caffio">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-8">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Coffee Journey Today
          </h2>
          <p class="text-lg sm:text-xl text-cream leading-relaxed max-w-2xl mx-auto">
            Join thousands of coffee enthusiasts mastering the art of brewing with AI
          </p>
          <a
            href="https://apps.apple.com/app/caffio"
            class="inline-flex items-center justify-center px-10 py-5 bg-white text-coffee-brown font-bold text-lg rounded-xl shadow-warm hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            aria-label="Download Caffio from App Store"
          >
            Download on the App Store
          </a>
          <p class="text-sm text-cream opacity-80">
            Free to download • Premium features available • iOS 17.0+
          </p>
        </div>
      </div>
    </section>

    <AppFooter />
  </main>
</template>

<script setup>
useHead({
  title: 'Caffio - AI-Powered Coffee Recipe App | Master the Art of Coffee',
  meta: [
    {
      name: 'description',
      content: 'Discover Caffio, the revolutionary coffee app that uses Apple Intelligence to create personalized brewing recipes. Transform your coffee experience with AI-powered guides, professional techniques, and a curated recipe library.'
    },
    {
      property: 'og:title',
      content: 'Caffio - Your AI Coffee Sommelier | Download on App Store'
    },
    {
      property: 'og:description',
      content: 'Master coffee brewing with AI-generated recipes, professional guides, and personalized recommendations. Available now on the App Store.'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://caffio.fr'
    }
  ]
})
</script>

