<template>
  <footer class="bg-dark-roast text-cream py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-4 gap-8">

        <div class="md:col-span-1">
          <div class="flex items-center mb-4">
            <div class="text-2xl font-bold text-white">
              <img src="/caffioIcon.png" alt="Caffio Logo" class="h-8 w-8 mr-1 inline-block" />
              Caffio
            </div>
          </div>
          <p class="text-cream text-sm leading-relaxed mb-4">
            Your personal coffee sommelier powered by Apple Intelligence.
            Master the art of brewing with AI-generated recipes.
          </p>
          <div class="text-xs text-coffee-300">
            Made with ❤️ for coffee lovers
          </div>
        </div>

        <div>
          <h4 class="font-semibold text-white mb-4">Product</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <nuxt-link to="/#features" class="text-cream hover:text-accent-300 transition-colors">
                Features
              </nuxt-link>
            </li>
            <li>
              <a href="https://apps.apple.com/fr/app/caffio/id6753070040?l=en-GB" class="text-cream hover:text-accent-300 transition-colors">
                Download App
              </a>
            </li>
            <li>
              <nuxt-link to="/about" class="text-cream hover:text-accent-300 transition-colors">
                About Us
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-white mb-4">Support</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <nuxt-link to="/contact" class="text-cream hover:text-accent-300 transition-colors">
                Contact Us
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/qa" class="text-cream hover:text-accent-300 transition-colors">
                Q&A
              </nuxt-link>
            </li>
            <li>
              <a href="mailto:support@caffio.app" class="text-cream hover:text-accent-300 transition-colors">
                Email Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="font-semibold text-white mb-4">Legal</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <nuxt-link to="/privacy" class="text-cream hover:text-accent-300 transition-colors">
                Privacy Policy
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/terms" class="text-cream hover:text-accent-300 transition-colors">
                Terms of Service
              </nuxt-link>
            </li>
          </ul>
        </div>

      </div>

      <div class="border-t border-coffee-700 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">

          <div class="text-sm text-coffee-300 mb-4 md:mb-0">
            © {{ currentYear }} Carolane Lefebvre - Okorp. All rights reserved.
          </div>

          <!-- <div class="flex space-x-6">
            <a
              href="https://twitter.com/caffioapp"
              class="text-cream hover:text-accent-300 transition-colors"
              aria-label="Follow Caffio on Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>

            <a
              href="https://instagram.com/caffioapp"
              class="text-cream hover:text-accent-300 transition-colors"
              aria-label="Follow Caffio on Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.894 3.708 13.743 3.708 12.446s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.541c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
              </svg>
            </a>

            <a
              href="https://facebook.com/caffioapp"
              class="text-cream hover:text-accent-300 transition-colors"
              aria-label="Follow Caffio on Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a
              href="https://linkedin.com/company/caffio"
              class="text-cream hover:text-accent-300 transition-colors"
              aria-label="Follow Caffio on LinkedIn"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div> -->

        </div>

        <div class="mt-6 pt-6 border-t border-coffee-700 text-center">
          <p class="text-xs text-coffee-300">
            Caffio is not affiliated with Apple Inc. Apple Intelligence is a trademark of Apple Inc.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>