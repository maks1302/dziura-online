'use client';

import { useState } from 'react';

type SubscribeFormProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function SubscribeForm({ title, subtitle, className }: SubscribeFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
    <div className={className}>
      {(title || subtitle) && (
        <div className="text-center">
          {title && (
            <h3 className="text-lg text-white mb-2">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-400 mb-6">{subtitle}</p>
          )}
        </div>
      )}

      {isSubmitted ? (
        <div className="text-green-400 text-sm text-center">
          ✓ Thanks for subscribing! You&apos;ll receive updates soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
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
            className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? '...' : 'Subscribe'}
          </button>
        </form>
      )}

      {!title && !subtitle && (
        <p className="text-xs text-gray-500 mt-3 text-center">No spam. Unsubscribe anytime.</p>
      )}
    </div>
  );
}
