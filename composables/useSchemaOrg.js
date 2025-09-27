export const useSchemaOrg = () => {
  // Schema.org pour l'application mobile
  const mobileApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: 'Caffio',
    description: 'AI-powered coffee recipe app that uses Apple Intelligence to create personalized brewing guides and professional coffee recipes.',
    applicationCategory: 'FoodApplication',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Organization',
      name: 'Caffio',
      url: 'https://caffio.app'
    },
    softwareVersion: '1.0',
    screenshot: [
      'https://caffio.app/screenshots/home.jpg',
      'https://caffio.app/screenshots/recipe-detail.jpg',
      'https://caffio.app/screenshots/ai-generator.jpg'
    ],
    featureList: [
      'AI-powered recipe generation',
      'Professional brewing guides',
      'Personal recipe collection',
      'Smart search and filtering',
      'Equipment recommendations',
      'Apple Intelligence integration'
    ],
    potentialAction: {
      '@type': 'ViewAction',
      target: 'https://apps.apple.com/app/caffio'
    }
  }

  // Schema.org pour l'organisation
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Caffio',
    url: 'https://caffio.app',
    logo: 'https://caffio.app/logo.png',
    description: 'Creators of the AI-powered coffee recipe app for iOS.',
    sameAs: [
      'https://twitter.com/caffioapp',
      'https://instagram.com/caffioapp',
      'https://facebook.com/caffioapp'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'caffio@okorp.fr'
    }
  }

  // Schema.org pour le site web
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Caffio',
    url: 'https://caffio.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://caffio.app/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  // Schema.org pour les Q&A (excellent pour AIO)
  const qaSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What makes Caffio different from other coffee apps?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Caffio is the first coffee app to integrate Apple Intelligence for personalized recipe generation. Unlike traditional recipe apps, Caffio learns your preferences and creates unique brewing suggestions tailored to your taste profile and available equipment.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the AI recipe generation work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our AI analyzes your taste preferences, equipment, and skill level to generate custom recipes. Simply input your preferences - like strength, sweetness, and flavor notes - and Caffio creates a personalized brewing guide optimized for your perfect cup.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need special equipment to use Caffio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No! Caffio adapts to whatever equipment you have. Whether it's a basic French press, pour-over setup, or professional espresso machine, our app provides recipes and techniques optimized for your specific tools."
        }
      },
      {
        '@type': 'Question',
        name: 'Is Caffio suitable for beginners?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! Caffio is designed for coffee lovers at all skill levels. Beginners get simple, foolproof recipes with detailed instructions, while experienced baristas can explore advanced techniques and experimental brewing methods.'
        }
      }
    ]
  }

  // Schema.org pour les avis produit
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Caffio - AI Coffee Recipe App',
    description: 'Professional coffee brewing app with AI-powered recipe generation using Apple Intelligence',
    brand: {
      '@type': 'Brand',
      name: 'Caffio'
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '0',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      url: 'https://apps.apple.com/app/caffio'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Chen'
        },
        reviewBody: 'Amazing app! The AI suggestions are spot-on and helped me discover new brewing methods I never would have tried.'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Marco Rodriguez'
        },
        reviewBody: 'As a professional barista, I\'m impressed by the accuracy and depth of the brewing guides. Perfect for both pros and beginners.'
      }
    ]
  }

  // Fonction pour ajouter les schemas au head
  const addSchemaToHead = () => {
    useHead({
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(mobileApplicationSchema)
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(organizationSchema)
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(websiteSchema)
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(qaSchema)
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(productSchema)
        }
      ]
    })
  }

  return {
    mobileApplicationSchema,
    organizationSchema,
    websiteSchema,
    qaSchema,
    productSchema,
    addSchemaToHead
  }
}