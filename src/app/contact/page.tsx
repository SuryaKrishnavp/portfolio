
"use client";

import Layout from '@/components/Layout';

export default function ContactPage() {
  return (
    <Layout>
      <main className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact</h1>
        <p className="text-gray-300 mb-8 text-center">I am available for freelance work and full-time opportunities. Reach out via any of the channels below.</p>

        <div className="bg-gray-900 p-6 rounded-lg mx-auto max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <a href="https://wa.me/916282870940" target="_blank" rel="noreferrer" className="bg-green-700 hover:bg-green-600 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20.52 3.48A11.89 11.89 0 0012 0C5.37 0 .5 5.37.5 12c0 2.11.55 4.09 1.6 5.86L0 24l6.39-1.62A11.89 11.89 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52z" fill="#fff"/>
                <path d="M17.07 14.04c-.28-.14-1.66-.82-1.92-.91-.26-.09-.44-.14-.63.14-.19.28-.76.91-.93 1.1-.17.19-.35.21-.63.07-.28-.14-1.05-.4-2-1.25-.74-.66-1.25-1.47-1.4-1.74-.15-.27-.02-.42.12-.56.14-.14.29-.36.44-.55.15-.19.2-.31.29-.51.08-.2.05-.37-.02-.52-.07-.15-.66-1.56-.9-2.14-.24-.58-.46-.5-.64-.51-.18-.01-.36-.01-.52-.01-.17 0-.42.02-.64.31-.22.29-.85.98-.85 2.4 0 1.42.87 2.49 1 2.68.13.19 2.03 3.11 4.95 4.37 2.38 1.03 2.03.67 2.38.61.35-.06 1.48-.67 1.69-1.3.21-.63.21-1.17.16-1.29-.05-.12-.24-.19-.52-.33z" fill="#000"/>
              </svg>
              <div className="text-sm font-semibold">WhatsApp</div>
            </a>

            <a href="mailto:vpsuryakrishna@gmail.com" className="bg-blue-700 hover:bg-blue-600 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#fff"/>
                <path d="M3 6l9 7 9-7" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
              <div className="text-sm font-semibold">Email</div>
            </a>

            <a href="https://www.instagram.com/surya_krishnavp/?hl=en" target="_blank" rel="noreferrer" className="bg-pink-600 hover:bg-pink-500 text-black p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="6" fill="#fff"/>
                <circle cx="12" cy="12" r="3" fill="#000"/>
                <circle cx="17.5" cy="6.5" r="1" fill="#000"/>
              </svg>
              <div className="text-sm font-semibold">Instagram</div>
            </a>

            <a href="https://github.com/SuryaKrishnavp" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.49 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.1 2.93.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.115 2.51.338 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.42-.01 2.75 0 .27.16.59.67.49C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">GitHub</div>
            </a>

            <a href="https://www.linkedin.com/in/suryakrishna-vp/" target="_blank" rel="noreferrer" className="bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5z" fill="#fff"/>
                <path d="M0 8h5v16H0V8zm7.5 0h4.6v2.2h.1c.64-1.2 2.2-2.2 4.5-2.2 4.8 0 5.7 3.2 5.7 7.4V24h-5v-7.2c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-5V8z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">LinkedIn</div>
            </a>

            <a href="https://x.com/suryakrishna_vp" target="_blank" rel="noreferrer" className="bg-sky-500 hover:bg-sky-400 text-white p-4 rounded-lg flex flex-col items-center gap-2">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M21.6 5.2c-.6.3-1.2.5-1.9.6.7-.4 1.2-1 1.4-1.8-.7.4-1.5.7-2.4.9C17.6 4 16.7 3.6 15.6 3.6c-1.6 0-2.9 1.3-2.9 2.9 0 .2 0 .4.1.6-2.4-.1-4.6-1.3-6-3.1-.3.5-.4 1-.4 1.6 0 1.1.6 2.1 1.6 2.7-.5 0-1-.2-1.4-.4v.1c0 1.4 1 2.6 2.4 2.8-.4.1-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.7 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.8 0 13.6-7.3 13.6-13.6v-.6 c.9-.7 1.6-1.6 2.1-2.6-.8.4-1.7.6-2.6.7z" fill="#fff"/>
              </svg>
              <div className="text-sm font-semibold">X</div>
            </a>
          </div>
        </div>

      </main>
    </Layout>
  );
}
