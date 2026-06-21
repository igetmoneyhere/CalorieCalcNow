import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy - CalorieCalcNow',
  description: 'Privacy Policy for CalorieCalcNow. Learn how we protect your data and privacy.',
};

export default function Privacy() {
  return (
    <>
      <Navigation />
      
      <main>
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mb-12 font-semibold">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  CalorieCalcNow ("we", "us", "our", or "Company") operates this website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We are committed to protecting your privacy and ensuring you have a positive experience on our website.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information Collection and Use</h2>
                <p className="mb-4">
                  We collect different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address (optional for newsletter)</li>
                  <li><strong>Usage Data:</strong> Browser type, pages visited, time spent, IP address, referral source</li>
                  <li><strong>Cookies:</strong> Stored on your device to enhance your experience and remember preferences</li>
                  <li><strong>Calculation Data:</strong> Age, weight, height, gender, activity level (NOT stored on our servers)</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Data</h2>
                <p className="mb-4">CalorieCalcNow uses the collected data for various purposes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer support and respond to inquiries</li>
                  <li>To gather analysis or valuable information to improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                  <li>To detect, prevent, and address technical and security issues</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Security of Data</h2>
                <p>
                  The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to This Privacy Policy</h2>
                <p>
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top of this Privacy Policy.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at support@caloriecalcnow.com
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
