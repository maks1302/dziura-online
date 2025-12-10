'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Automation() {
  

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Main Info */}
            <FadeIn>
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-light text-white mb-2">
                    Automation Expert
                  </h1>
                  <p className="text-xl text-gray-300 font-light">
                    n8n • Make • Zapier Specialist
                  </p>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                  I help businesses streamline their workflows and automate repetitive tasks 
                  using cutting-edge automation platforms. Also I do this for fun and learning 🤘
                </p>
              </div>
            </FadeIn>
            
            {/* Skills & Work */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                
                <div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                    My Work
                  </h3>
                  <div className="space-y-2">
                    <a 
                      href="https://www.icloud.com/shortcuts/b3f8cdfde4f24a7a8522bd71c4945870"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-gray-300 hover:text-white underline hover:no-underline transition-all"
                    >
                      Tweet Reply Generator (IOS shortcut)
                    </a>
                    
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Intelligent automation workflows
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Available for automation projects
                </div>
              </div>
            </FadeIn>
            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

