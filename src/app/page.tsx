import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Calculator from '@/components/Calculator';
import { generateSchemaMarkup, generateFAQSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'CalorieCalcNow - Free Calorie Calculator | TDEE & BMR',
  description: 'Calculate your daily calorie needs instantly. Use our free calorie calculator to determine TDEE, BMR, and personalized calorie intake for weight loss, maintenance, or muscle gain.',
  keywords: [
    'calorie calculator',
    'TDEE calculator',
    'BMR calculator',
    'daily calorie intake',
    'calories needed',
    'calorie deficit',
    'calorie surplus',
    'metabolic rate',
    'daily energy expenditure',
    'fitness calculator',
  ],
};

export default function Home() {
  const schemaMarkup = generateSchemaMarkup();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
          <div className="container-max text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Calculate Your Daily Calories</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Fast, accurate calorie calculations based on your personal metrics and fitness goals. Free, no signup required.
            </p>
            <a href="#calculator" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Start Calculating
            </a>
          </div>
        </section>

        {/* Calculator Section */}
        <section id="calculator" className="py-16 md:py-24 bg-gray-50">
          <div className="container-max">
            <Calculator />
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">1</div>
                <h3 className="text-xl font-bold mb-3">Enter Your Info</h3>
                <p className="text-gray-600">Provide your age, weight, height, gender, and activity level.</p>
              </div>
              <div className="bg-indigo-50 p-8 rounded-lg">
                <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">2</div>
                <h3 className="text-xl font-bold mb-3">Set Your Goal</h3>
                <p className="text-gray-600">Choose weight loss, maintenance, or muscle gain.</p>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mb-4">3</div>
                <h3 className="text-xl font-bold mb-3">Get Results</h3>
                <p className="text-gray-600">Receive your BMR, TDEE, and personalized macro recommendations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-max">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <details className="bg-white p-6 rounded-lg shadow cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 select-none">What is BMR?</summary>
                <p className="text-gray-600 mt-4">BMR (Basal Metabolic Rate) is the number of calories your body burns at rest to maintain basic physiological functions like breathing, circulation, and cell production. It's typically the largest component of your daily calorie burn.</p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 select-none">What is TDEE?</summary>
                <p className="text-gray-600 mt-4">TDEE (Total Daily Energy Expenditure) is the total number of calories your body burns in a day, including BMR plus calories burned through physical activity and daily movement. It's used to calculate calorie intake for your fitness goals.</p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 select-none">How accurate is this calculator?</summary>
                <p className="text-gray-600 mt-4">Our calculator uses the Mifflin-St Jeor equation, which is one of the most accurate formulas for calculating BMR. However, individual metabolic rates can vary. We recommend tracking your weight for 2-3 weeks and adjusting based on real results.</p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 select-none">What should my macros be?</summary>
                <p className="text-gray-600 mt-4">Our calculator provides recommended macros based on your goal. Generally: Protein 25-35%, Carbs 35-45%, Fats 20-35%. For weight loss, slightly higher protein helps preserve muscle. For muscle gain, higher protein supports recovery and growth.</p>
              </details>
              
              <details className="bg-white p-6 rounded-lg shadow cursor-pointer">
                <summary className="font-bold text-lg text-gray-900 select-none">Can I trust these results?</summary>
                <p className="text-gray-600 mt-4">Yes, our calculator uses scientifically-backed formulas. However, these are estimates. Actual calorie needs vary based on metabolism, age, hormones, and other factors. Start with our recommendations and adjust based on your progress.</p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="container-max text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Fitness Journey Today</h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">Get accurate calorie calculations tailored to your goals in seconds.</p>
            <a href="#calculator" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Calculate Now
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
