'use client';

import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Main Info */}
          <FadeIn>
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-light text-white mb-2">
                  Max Dziura
                </h1>
                <p className="text-xl text-gray-300 font-light">
                  Solo Developer & Entrepreneur
                </p>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Building digital products and solutions. Focused on clean code, 
                user experience, and turning ideas into reality.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="https://x.com/MaxDziura" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Twitter
                </a>
                <a 
                  href="https://t.me/demploy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </FadeIn>
          
          {/* Skills & Status */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                  Focus Areas
                </h3>
                <div className="space-y-2">
                  <div className="text-sm text-gray-300">Web Development</div>
                  <div className="text-sm text-gray-300">Product Strategy</div>
                  <div className="text-sm text-gray-300">UI/UX Design</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                  Featured Projects
                </h3>
                <a 
                  href="https://ideaharvester.app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  ideaharvester.app
                </a>
              </div>
              
              <div className="text-xs text-gray-500">
                Available for new opportunities
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </div>
  );
}
