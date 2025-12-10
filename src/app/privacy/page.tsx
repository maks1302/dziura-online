'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button - Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <FadeIn>
          <Link 
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            ← Back
          </Link>
        </FadeIn>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-6 pt-20">
        <div className="max-w-5xl lg:max-w-6xl mx-auto w-full">
          <FadeIn>
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-white mb-2">
                  Privacy Policy
                </h1>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                This privacy policy sets out how this website uses and protects any information that you give when you use this website.
              </p>

              <h2 className="text-2xl font-light text-white pt-4">
                Information We Collect
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                We may collect the following information:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-400 text-lg leading-relaxed max-w-2xl">
                <li>Your name and email address when you subscribe to our newsletter.</li>
                <li>Information about your computer and your visits to and use of this website (including your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths).</li>
              </ul>

              <h2 className="text-2xl font-light text-white pt-4">
                How We Use Information
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                We use this information to understand your needs and provide you with a better service, and in particular for the following reasons:
              </p>
              <ul className="list-disc list-inside pl-4 text-gray-400 text-lg leading-relaxed max-w-2xl">
                <li>To send you our newsletter, if you have subscribed.</li>
                <li>To improve our products and services.</li>
                <li>To personalize your website experience.</li>
              </ul>

              <h2 className="text-2xl font-light text-white pt-4">
                Security
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
              </p>

              <h2 className="text-2xl font-light text-white pt-4">
                Contact Us
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                If you have any questions about this privacy policy or our treatment of your personal information, please write to us by email.
              </p>

            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </div>
  );
}
