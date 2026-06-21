export function generateSchemaMarkup() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Calculator',
    name: 'CalorieCalcNow - Calorie Calculator',
    description: 'Calculate your daily calorie needs based on your personal metrics and fitness goals.',
    url: 'https://caloriecalcnow.com',
    applicationCategory: 'HealthApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a calorie calculator?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A calorie calculator helps you determine how many calories you should consume daily based on your age, weight, height, gender, activity level, and fitness goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is BMR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMR (Basal Metabolic Rate) is the number of calories your body burns at rest to maintain basic physiological functions.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is TDEE?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TDEE (Total Daily Energy Expenditure) is the total number of calories you burn in a day including activity.',
        },
      },
    ],
  };
}
