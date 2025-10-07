"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || '/';

  const links = [
    { href: '/', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-black/60 via-black/40 to-transparent backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden">
              <img src="/suryaicon.png" alt="Suryakrishna" className="w-full h-full object-cover block" />
            </div>
            <div className="leading-tight">
              <a href="#home" className="text-sm md:text-lg font-semibold">Suryakrishna</a>
              <div className="text-[10px] md:text-xs text-gray-400">Backend & FullStack Dev</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {links.map((l) => {
              const isActive = pathname === l.href;
              const base = 'transition-colors px-2 py-1 rounded';
              const activeClass = 'text-blue-400 font-semibold';
              const inactiveClass = 'text-gray-200 hover:text-white hover:underline';
              const cls = base + ' ' + (isActive ? activeClass : inactiveClass);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cls}
                >
                  {l.label}
                </Link>
              );
            })}
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="ml-4 inline-flex items-center bg-green-500 hover:bg-green-400 text-black font-medium px-3 py-1.5 rounded">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.6 5.86L0 24l6.39-1.62A11.9 11.9 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.5-8.5zM12 21.8c-1.7 0-3.34-.44-4.78-1.27l-.34-.2-3.79.96.96-3.7-.22-.37A9.4 9.4 0 012.6 12 9.4 9.4 0 1112 21.8z" />
                <path d="M17.5 14.5c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.36.22-.66.07-.3-.15-1.13-.42-2.15-1.33-.8-.72-1.34-1.6-1.5-1.9-.16-.3-.02-.46.13-.61.14-.14.3-.36.45-.54.14-.18.19-.3.28-.5.09-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.24-.56-.48-.48-.66-.49-.17-.01-.36-.01-.55-.01s-.52.07-.79.37c-.27.3-1.03 1.01-1.03 2.47s1.06 2.86 1.21 3.05c.15.2 2.09 3.2 5.07 4.49 3.07 1.33 3.07 0.88 3.63 0.82.56-.06 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.28-.2-.58-.35z" fill="#000" />
              </svg>
              Chat Up
            </a>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-white/5">
              <span className="sr-only">Toggle menu</span>
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 px-4 pb-4">
          <div className="flex flex-col gap-2">
            {links.map((l) => {
              const isActive = pathname === l.href;
              const mobileBase = 'block py-3 border-b border-white/5 text-base px-2 rounded';
              const mobileActive = 'text-blue-400 font-semibold bg-white/2';
              const mobileInactive = 'text-gray-200 hover:text-white';
              const cls = mobileBase + ' ' + (isActive ? mobileActive : mobileInactive);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cls}
                >
                  {l.label}
                </Link>
              );
            })}
            <a href="https://wa.me/916282870940" target="_blank" rel="noreferrer" className="block text-center bg-green-500 text-black py-2 rounded">Chat Up</a>
          </div>
        </div>
      )}
    </header>
  );
}
