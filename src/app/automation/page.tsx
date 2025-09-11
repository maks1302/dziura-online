'use client';

import FadeIn from '@/components/FadeIn';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Automation() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button - Top Left */}
      <div className="absolute top-6 left-6 z-10">
        <FadeIn>
          <a 
            href="/"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            ← Back
          </a>
        </FadeIn>
      </div>

      <div className="flex-1 flex items-center justify-center p-6 pt-20">
        <div className="max-w-4xl mx-auto">
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
                  using cutting-edge automation platforms.
                </p>
              </div>
            </FadeIn>
            
            {/* Skills & Work */}
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                    Platforms
                  </h3>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-300">n8n Workflows</div>
                    <div className="text-sm text-gray-300">Make Integrations</div>
                    <div className="text-sm text-gray-300">Zapier Automations</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-3">
                    My Work
                  </h3>
                  <div className="text-sm text-gray-300">
                    [Coming Soon]
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Featured automation projects will be showcased here
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  Available for automation projects
                </div>
              </div>
            </FadeIn>
            
          </div>

          {/* Email Subscription Section */}
          <FadeIn delay={0.4}>
            <div className="mt-16 pt-8 border-t border-gray-800">
              <div className="max-w-md mx-auto text-center">
                <h3 className="text-lg text-white mb-2">
                  Get Free Automation Templates
                </h3>
                <p className="text-sm text-gray-400 mb-6">
                  Subscribe to receive cool automation templates and workflow ideas
                </p>
                
                {isSubmitted ? (
                  <div className="text-green-400 text-sm">
                    ✓ Thanks for subscribing! You'll receive automation templates soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? '...' : 'Subscribe'}
                    </button>
                  </form>
                )}
                
                <p className="text-xs text-gray-500 mt-3">
                  No spam. Unsubscribe anytime.
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
