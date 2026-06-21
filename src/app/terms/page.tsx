import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service - CalorieCalcNow',
  description: 'Terms of Service for CalorieCalcNow. Please read these terms carefully.',
};

export default function Terms() {
  return (
    <>
      <Navigation />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Terms of Service</h1>
            <p className="text-gray-600 mb-12 font-semibold">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing and using the CalorieCalcNow website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on CalorieCalcNow for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the site</li>
                  <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Scrape or automate access to the site</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p>
                  The materials on CalorieCalcNow are provided on an 'as is' basis. CalorieCalcNow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
                <p>
                  In no event shall CalorieCalcNow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CalorieCalcNow.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Medical Disclaimer</h2>
                <p>
                  The information provided by CalorieCalcNow is for educational and informational purposes only and is not intended as medical advice. Our calorie calculator provides estimates based on scientific formulas. Individual results may vary. Always consult with a healthcare professional or registered dietitian before making significant dietary changes or if you have specific health conditions.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Modifications</h2>
                <p>
                  CalorieCalcNow may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at support@caloriecalcnow.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
