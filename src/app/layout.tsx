import type { Metadata } from 'next';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://caloriecalcnow.com';

export const metadata: Metadata = {
  title: 'CalorieCalcNow - Free Calorie Calculator',
  description: 'Fast and accurate calorie calculator to determine your daily calorie needs. Calculate TDEE, BMR, and calorie intake for weight loss, maintenance, or muscle gain.',
  keywords: ['calorie calculator', 'TDEE calculator', 'BMR calculator', 'calorie intake', 'daily calories needed'],
  authors: [{ name: 'CalorieCalcNow' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'CalorieCalcNow - Free Calorie Calculator',
    description: 'Calculate your daily calorie needs instantly. Free online tool for TDEE, BMR, and calorie intake estimation.',
    url: siteUrl,
    siteName: 'CalorieCalcNow',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'CalorieCalcNow - Calorie Calculator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CalorieCalcNow - Free Calorie Calculator',
    description: 'Fast and accurate calorie calculator for your fitness goals.',
  },
  canonical: siteUrl,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />
      </head>
      <body className="bg-white text-gray-900 font-sans">
        {children}
      </body>
    </html>
  );
}
