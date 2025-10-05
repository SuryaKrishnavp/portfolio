"use client";

import { useState } from 'react';
import Layout from '@/components/Layout';

export default function ContactPage() {
  const email = 'vpsuryakrishna@gmail.com';
  const [name, setName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name || !userEmail || !message) {
      setError('Please fill name, email and message.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: userEmail, subject, message }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        setName(''); setUserEmail(''); setSubject(''); setMessage('');
      } else {
        setStatus('error');
        setError(data?.error || 'Failed to send message');
      }
    } catch (err: unknown) {
      setStatus('error');
      const msg = err instanceof Error ? err.message : String(err);
      setError(msg || 'Network error');
    }
  };

  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
  <p className="text-gray-300 mb-8 text-center">I am available for freelance work and full-time opportunities. Use the contact options to reach me or send a message below.</p>

        <div>
          <div className="bg-gray-900 p-6 rounded-lg mx-auto max-w-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none" placeholder="Your name" />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none" placeholder="your@email.com" />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Subject (optional)</label>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none" placeholder="Subject" />
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="w-full p-3 bg-gray-800 rounded border border-gray-700 focus:outline-none" rows={6} placeholder="Hi Surya, ..." />
              </div>

              {error && <div className="text-sm text-red-400">{error}</div>}

              <div className="flex items-center gap-3">
                <button type="submit" disabled={status === 'sending'} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {status === 'success' && <div className="text-sm text-green-400">Message sent — thank you!</div>}
                {status === 'error' && <div className="text-sm text-red-400">Failed to send message.</div>}
              </div>
            </form>

            <div className="mt-6">
              <div className="text-sm text-gray-400 mb-2">Other ways to reach me:</div>
              <div className="flex flex-col gap-3">

                <a href="https://wa.me/916282870940" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-gray-800 p-3 rounded tile-hover">
                  <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M20.52 3.48A11.89 11.89 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.55 4.09 1.6 5.86L0 24l6.39-1.62A11.89 11.89 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.8c-1.7 0-3.34-.44-4.78-1.27l-.34-.2-3.79.96.96-3.7-.22-.37A9.4 9.4 0 012.6 12 9.4 9.4 0 1112 21.8z"/></svg>
                  <div className="text-sm">WhatsApp</div>
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </Layout>
  );
}
