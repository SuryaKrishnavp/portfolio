import { ReactNode } from 'react';

export interface SocialLinkProps {
  href: string;
  children: ReactNode;
  color: 'blue' | 'purple' | 'green';
}

export default function SocialLink({ href, children, color }: SocialLinkProps) {
  const colorMap = {
    blue: 'text-blue-400 hover:text-blue-300',
    purple: 'text-purple-400 hover:text-purple-300',
    green: 'text-green-400 hover:text-green-300',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${colorMap[color]} transition-colors`}
    >
      {children}
    </a>
  );
}