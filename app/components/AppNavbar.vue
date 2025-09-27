<template>
  <nav class="bg-white shadow-coffee sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <nuxt-link to="/" class="flex items-center space-x-2">
            <img src="/caffioIcon.png" alt="Caffio" class="h-8 w-8" />
            <span class="text-2xl font-bold text-dark-roast">Caffio</span>
          </nuxt-link>
        </div>

        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <nuxt-link
              to="/"
              class="text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-dark-roast font-semibold': $route.path === '/' }"
            >
              Home
            </nuxt-link>
            <nuxt-link
              to="/about"
              class="text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-dark-roast font-semibold': $route.path === '/about' }"
            >
              About
            </nuxt-link>
            <nuxt-link
              to="/qa"
              class="text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-dark-roast font-semibold': $route.path === '/qa' }"
            >
              Q&A
            </nuxt-link>
            <nuxt-link
              to="/contact"
              class="text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-dark-roast font-semibold': $route.path === '/contact' }"
            >
              Contact
            </nuxt-link>
            <a
              href="https://apps.apple.com/app/caffio"
              class="bg-coffee-brown text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-dark-roast transition-all duration-300 transform hover:-translate-y-1"
            >
              Download
            </a>
          </div>
        </div>

        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-coffee-brown hover:text-dark-roast focus:outline-none focus:text-dark-roast"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-show="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-cream">
          <nuxt-link
            to="/"
            class="block text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'text-dark-roast font-semibold': $route.path === '/' }"
            @click="mobileMenuOpen = false"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="block text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'text-dark-roast font-semibold': $route.path === '/about' }"
            @click="mobileMenuOpen = false"
          >
            About
          </nuxt-link>
          <nuxt-link
            to="/qa"
            class="block text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'text-dark-roast font-semibold': $route.path === '/qa' }"
            @click="mobileMenuOpen = false"
          >
            Q&A
          </nuxt-link>
          <nuxt-link
            to="/contact"
            class="block text-coffee-brown hover:text-dark-roast px-3 py-2 rounded-md text-base font-medium"
            :class="{ 'text-dark-roast font-semibold': $route.path === '/contact' }"
            @click="mobileMenuOpen = false"
          >
            Contact
          </nuxt-link>
          <a
            href="https://apps.apple.com/app/caffio"
            class="block bg-coffee-brown text-white px-3 py-2 rounded-xl text-base font-semibold text-center"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>