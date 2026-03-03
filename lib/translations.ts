export type Locale = "fr" | "en";

export const translations: Record<Locale, Record<string, string>> = {
  fr: {
    // ─── Hero ─────────────────────────────────────────────
    "hero.subtitle_before": "Aidez-nous à créer l\u2019app café ",
    "hero.subtitle_highlight": "parfaite",
    "hero.subtitle_after": "",
    "hero.description":
      "Nous concevons Caffio, une application iOS pour les amoureux du café. Vos réponses guident nos décisions produit.",
    "hero.duration": "~3 minutes",

    // ─── Footer ───────────────────────────────────────────
    "footer.text": "Caffio \u00b7 Application iOS de gestion de cafés",

    // ─── Progress bar steps ───────────────────────────────
    "step.profile": "Profil café",
    "step.features": "Features",
    "step.experience": "Expérience",

    // ─── Step 0 : Profil café ─────────────────────────────
    "step0.title": "Profil café",
    "step0.subtitle": "Parlez-nous de vos habitudes",
    "step0.frequency_label": "Fréquence de consommation",
    "step0.frequency_never_msg":
      "Caffio s\u2019adresse aux amateurs de café. Si vous n\u2019en consommez pas, le questionnaire n\u2019est peut-être pas adapté. Merci d\u2019avoir pris le temps !",
    "step0.coffee_types_label": "Types de café préférés",
    "step0.equipment_label": "Équipement possédé",
    "step0.expertise_label": "Niveau d\u2019expérience",

    // Frequency options
    "Jamais": "Jamais",
    "1-2 par semaine": "1-2 par semaine",
    "1 par jour": "1 par jour",
    "2-3 par jour": "2-3 par jour",
    "4+ par jour": "4+ par jour",

    // Coffee types
    "Espresso": "Espresso",
    "Filtre": "Filtre",
    "Latte": "Latte",
    "Cappuccino": "Cappuccino",
    "Cold brew": "Cold brew",
    "Matcha": "Matcha",
    "Autre": "Autre",

    // Equipment
    "Machine espresso": "Machine espresso",
    "Cafetière filtre": "Cafetière filtre",
    "French press": "French press",
    "V60": "V60",
    "AeroPress": "AeroPress",
    "Chemex": "Chemex",
    "Moka": "Moka",
    "Moulin": "Moulin",
    "Balance": "Balance",
    "Bouilloire": "Bouilloire",

    // Expertise
    "Débutant": "Débutant",
    "Intermédiaire": "Intermédiaire",
    "Expert": "Expert",

    // ─── Step 1 : Features ────────────────────────────────
    "step1.title": "Features souhaitées",
    "step1.subtitle": "Quelles fonctionnalités vous font envie ?",
    "step1.app_desc_title": "Caffio, c\u2019est quoi ?",
    "step1.app_desc_text":
      "Capturez vos moments café et partagez-les avec vos proches. Suivez votre consommation de caféine au quotidien avec des conseils personnalisés. Laissez Apple Intelligence vous générer des idées de recettes. Et bien plus encore\u2026",
    "step1.features_label": "Fonctionnalités souhaitées",
    "step1.most_important_label":
      "Quelle fonctionnalité est la plus importante ?",
    "step1.most_important_placeholder":
      "Décrivez la fonctionnalité essentielle à vos yeux\u2026",
    "step1.suggestion_label":
      "Une idée de fonctionnalité à nous suggérer ?",
    "step1.suggestion_placeholder":
      "Décrivez une feature que vous aimeriez voir dans Caffio\u2026",

    // Feature labels (keyed by id)
    "feature.moments": "Capturer des moments café en photo",
    "feature.sharing": "Partage de moments avec ses proches",
    "feature.recipes": "Carnet de recettes personnelles",
    "feature.ai": "Génération de recettes par Apple Intelligence",
    "feature.caffeine": "Suivi quotidien de caféine + conseils",
    "feature.timer": "Timer de préparation intégré",
    "feature.equipment": "Gestion de son équipement café",
    "feature.community": "Communauté et interactions sociales",
    "feature.widgets": "Widgets iOS (résumé du jour, favoris)",
    "feature.tasting": "Notes de dégustation et notation",
    "feature.sync": "Synchronisation iCloud multi-appareils",
    "feature.healthkit": "Intégration HealthKit (santé Apple)",
    "feature.darkmode": "Mode sombre complet",
    "feature.stats": "Statistiques et historique de consommation",
    "feature.notifications": "Rappels et notifications personnalisées",

    // ─── Step 2 : Expérience ──────────────────────────────
    "step2.title": "Expérience utilisateur",
    "step2.subtitle": "Vos préférences pour le design et l\u2019expérience",
    "step2.design_label": "Ce qui compte le plus dans une app café",
    "step2.dark_mode_label": "Mode sombre",
    "step2.other_apps_label": "Utilisez-vous d\u2019autres apps cafe ?",
    "step2.other_apps_placeholder":
      "Nommez les apps que vous utilisez et ce que vous aimez ou non\u2026",
    "step2.comments_label": "Commentaires ou suggestions",
    "step2.comments_placeholder":
      "Quelque chose à ajouter ? Dites-nous tout\u2026",

    // Design priority options
    "Design / esthétique": "Design / esthétique",
    "Simplicité": "Simplicité",
    "Fonctionnalités avancées": "Fonctionnalités avancées",
    "Personnalisation": "Personnalisation",

    // Dark mode options
    "Toujours": "Toujours",
    "Automatique": "Automatique",
    "Pas d'avis": "Pas d\u2019avis",

    // ─── Navigation / UI ──────────────────────────────────
    "btn.previous": "Precedent",
    "btn.next": "Suivant",
    "btn.submit": "Envoyer",
    "btn.submitting": "Envoi...",
    "error.required": "Veuillez remplir les champs obligatoires.",
    "error.submit": "Erreur lors de l\u2019envoi",
    "other.specify": "Précisez\u2026",

    // ─── Merci page ───────────────────────────────────────
    "merci.title": "Merci beaucoup !",
    "merci.description": "Vos réponses ont bien été enregistrées.",
    "merci.detail":
      "Elles nous aident à construire Caffio, l\u2019app café qui vous ressemble. Chaque réponse compte pour prioriser les bonnes fonctionnalités.",
    "merci.back": "Retour a l\u2019accueil",
  },

  en: {
    // ─── Hero ─────────────────────────────────────────────
    "hero.subtitle_before": "Help us build the ",
    "hero.subtitle_highlight": "perfect",
    "hero.subtitle_after": " coffee app",
    "hero.description":
      "We are designing Caffio, an iOS app for coffee lovers. Your answers guide our product decisions.",
    "hero.duration": "~3 minutes",

    // ─── Footer ───────────────────────────────────────────
    "footer.text": "Caffio \u00b7 iOS coffee management app",

    // ─── Progress bar steps ───────────────────────────────
    "step.profile": "Coffee Profile",
    "step.features": "Features",
    "step.experience": "Experience",

    // ─── Step 0 : Coffee Profile ──────────────────────────
    "step0.title": "Coffee Profile",
    "step0.subtitle": "Tell us about your habits",
    "step0.frequency_label": "Consumption frequency",
    "step0.frequency_never_msg":
      "Caffio is designed for coffee lovers. If you don\u2019t drink coffee, this survey may not be relevant. Thanks for your time!",
    "step0.coffee_types_label": "Preferred coffee types",
    "step0.equipment_label": "Equipment owned",
    "step0.expertise_label": "Experience level",

    // Frequency options
    "Jamais": "Never",
    "1-2 par semaine": "1-2 per week",
    "1 par jour": "1 per day",
    "2-3 par jour": "2-3 per day",
    "4+ par jour": "4+ per day",

    // Coffee types
    "Espresso": "Espresso",
    "Filtre": "Filter",
    "Latte": "Latte",
    "Cappuccino": "Cappuccino",
    "Cold brew": "Cold brew",
    "Matcha": "Matcha",
    "Autre": "Other",

    // Equipment
    "Machine espresso": "Espresso machine",
    "Cafetière filtre": "Drip coffee maker",
    "French press": "French press",
    "V60": "V60",
    "AeroPress": "AeroPress",
    "Chemex": "Chemex",
    "Moka": "Moka",
    "Moulin": "Grinder",
    "Balance": "Scale",
    "Bouilloire": "Kettle",

    // Expertise
    "Débutant": "Beginner",
    "Intermédiaire": "Intermediate",
    "Expert": "Expert",

    // ─── Step 1 : Features ────────────────────────────────
    "step1.title": "Desired Features",
    "step1.subtitle": "What features interest you?",
    "step1.app_desc_title": "What is Caffio?",
    "step1.app_desc_text":
      "Capture your coffee moments and share them with friends and family. Track your daily caffeine intake with personalized tips. Let Apple Intelligence generate recipe ideas for you. And much more\u2026",
    "step1.features_label": "Desired features",
    "step1.most_important_label": "Which feature is the most important?",
    "step1.most_important_placeholder":
      "Describe the feature that matters most to you\u2026",
    "step1.suggestion_label": "Have a feature idea to suggest?",
    "step1.suggestion_placeholder":
      "Describe a feature you\u2019d like to see in Caffio\u2026",

    // Feature labels (keyed by id)
    "feature.moments": "Capture coffee moments in photos",
    "feature.sharing": "Share moments with friends & family",
    "feature.recipes": "Personal recipe notebook",
    "feature.ai": "Apple Intelligence recipe generation",
    "feature.caffeine": "Daily caffeine tracking + tips",
    "feature.timer": "Built-in brew timer",
    "feature.equipment": "Coffee equipment management",
    "feature.community": "Community & social interactions",
    "feature.widgets": "iOS Widgets (daily summary, favorites)",
    "feature.tasting": "Tasting notes & ratings",
    "feature.sync": "iCloud multi-device sync",
    "feature.healthkit": "HealthKit integration (Apple Health)",
    "feature.darkmode": "Full dark mode",
    "feature.stats": "Consumption statistics & history",
    "feature.notifications": "Custom reminders & notifications",

    // ─── Step 2 : Experience ──────────────────────────────
    "step2.title": "User Experience",
    "step2.subtitle": "Your design & experience preferences",
    "step2.design_label": "What matters most in a coffee app",
    "step2.dark_mode_label": "Dark mode",
    "step2.other_apps_label": "Do you use other coffee apps?",
    "step2.other_apps_placeholder":
      "Name the apps you use and what you like or dislike\u2026",
    "step2.comments_label": "Comments or suggestions",
    "step2.comments_placeholder":
      "Anything to add? Tell us everything\u2026",

    // Design priority options
    "Design / esthétique": "Design / aesthetics",
    "Simplicité": "Simplicity",
    "Fonctionnalités avancées": "Advanced features",
    "Personnalisation": "Customization",

    // Dark mode options
    "Toujours": "Always",
    "Automatique": "Automatic",
    "Pas d'avis": "No preference",

    // ─── Navigation / UI ──────────────────────────────────
    "btn.previous": "Previous",
    "btn.next": "Next",
    "btn.submit": "Submit",
    "btn.submitting": "Submitting...",
    "error.required": "Please fill in the required fields.",
    "error.submit": "Error while submitting",
    "other.specify": "Please specify\u2026",

    // ─── Merci page ───────────────────────────────────────
    "merci.title": "Thank you!",
    "merci.description": "Your answers have been recorded.",
    "merci.detail":
      "They help us build Caffio, the coffee app that fits you. Every answer counts to prioritize the right features.",
    "merci.back": "Back to home",
  },
};
