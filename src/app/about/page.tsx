import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About CalorieCalcNow - Our Mission',
  description: 'Learn about CalorieCalcNow and our mission to provide accurate, free calorie calculation tools for fitness enthusiasts worldwide.',
};

export default function About() {
  return (
    <>
      <Navigation />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">About CalorieCalcNow</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 leading-relaxed">
              <p className="text-lg">
                CalorieCalcNow is a free online tool designed to help you calculate your daily calorie needs accurately and instantly. Whether you're looking to lose weight, maintain your current weight, or build muscle, our calculator provides personalized calorie recommendations tailored to your unique metrics and goals.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
              <p>
                We believe that everyone should have access to accurate, science-based nutrition information without paywalls or complicated registrations. Our mission is to empower individuals with the tools and knowledge they need to make informed decisions about their fitness and nutrition.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">How We Calculate</h2>
              <p>
                Our calculator uses the Mifflin-St Jeor equation, one of the most accurate and widely-used formulas for calculating Basal Metabolic Rate (BMR). We then apply activity multipliers based on your current exercise level to determine your Total Daily Energy Expenditure (TDEE), which is adjusted based on your fitness goal (weight loss, maintenance, or muscle gain).
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Key Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Accurate BMR Calculations</strong> - Using the Mifflin-St Jeor equation</li>
                <li><strong>TDEE Estimation</strong> - Based on your activity level</li>
                <li><strong>Personalized Calorie Recommendations</strong> - Adjusted for your specific goal</li>
                <li><strong>Macro Nutrient Breakdown</strong> - Protein, carbs, and fat recommendations</li>
                <li><strong>Mobile-Responsive Design</strong> - Works on any device</li>
                <li><strong>100% Free</strong> - No signup, no hidden fees</li>
                <li><strong>Instant Results</strong> - Calculations in milliseconds</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Why Calorie Counting Matters</h2>
              <p>
                Whether your goal is to lose weight, build muscle, or maintain your current physique, calorie intake is the fundamental factor. While many other factors influence your health (sleep, stress, exercise type, genetics), calorie balance determines whether your weight changes. Our calculator gives you a starting point based on science.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Important Disclaimer</h2>
              <p>
                While our calculator uses scientifically-backed formulas, the results are estimates. Individual metabolic rates vary based on age, gender, genetics, hormones, medication, and other factors. We recommend tracking your actual results over 2-3 weeks and adjusting your calorie intake based on your progress. If you experience rapid weight change or have concerns, consult with a healthcare professional or registered dietitian.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Get Started</h2>
              <p>
                Ready to calculate your daily calories? <Link href="/" className="text-blue-600 hover:text-blue-700 font-semibold transition">Use our calculator now</Link> to get your personalized results and start your fitness journey.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
