'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
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
                {/* Prominent Blog Button */}
                <div className="pt-2">
                  <a
                    href="https://blog.dziura.online/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-base lg:text-lg font-medium shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
                    aria-label="Read my blog at blog.dziura.online"
                  >
                    Read the Blog
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M5 12.75A.75.75 0 0 1 5.75 12h9.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.75A.75.75 0 0 1 5 12.75z" />
                    </svg>
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
                    <div className="text-sm text-gray-300">Automations</div>
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
                    className="text-sm text-gray-300 hover:text-white underline hover:no-underline transition-all"
                  >
                    ideaharvester.app
                  </a>
                </div>
                
                <div className="text-xs text-gray-500">
                  Available for new opportunities
                </div>
              </div>
            </FadeIn>

            {/* Pages */}
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                    Pages
                  </h3>
                  <div className="space-y-2">
                    <a 
                      href="/automation"
                      className="text-sm text-gray-300 hover:text-white underline hover:no-underline transition-all"
                    >
                      Automation
                    </a>
                  </div>
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

