'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function N8NTwitterBot() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <FadeIn>
          <Link 
            href="/automation"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            ← Back
          </Link>
        </FadeIn>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 pt-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-white mb-2">
                  N8N Automated Twitter Reply Bot Workflow
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Intelligent Twitter/X Automation
                </p>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                This n8n workflow creates an intelligent Twitter/X reply bot that automatically scrapes tweets based on keywords or communities, analyzes them using AI, generates contextually appropriate replies, and posts them while avoiding duplicates. The bot operates on a schedule with intelligent timing and retry mechanisms.
              </p>

              {/* Links Section */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg text-white mb-4">Documentation & Resources</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://docs.google.com/document/d/13okk16lkUOgpbeahMcdmd7BuWkAp_Lx6kQ8BwScbqZk/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white underline hover:no-underline transition-all text-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                      </svg>
                      View Documentation
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg text-white mb-4">Workflow Preview</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://share-n8n.net/shared/UtIV0Lkq6Iv0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-300 hover:text-white underline hover:no-underline transition-all text-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                      Preview/Copy Workflow 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Embedded Workflow Section */}
          <FadeIn delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="max-w-5xl mx-auto">
                <h3 className="text-xl text-white mb-6 text-center">
                  Interactive Workflow Preview
                </h3>
                <div className="bg-gray-900 rounded-lg p-1 border border-gray-700">
                  <iframe
                    src="https://share-n8n.net/shared/UtIV0Lkq6Iv0"
                    className="w-full h-[600px] border-0 rounded"
                    title="N8N Twitter Bot Workflow"
                    loading="lazy"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  Click the workflow above to interact with the full n8n interface
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <Footer />
    </div>
  );
}
