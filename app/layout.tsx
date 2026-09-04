import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trupti Salve | Portfolio',
  description: 'Personal portfolio of Trupti Arvind Salve — Computer Science Engineering student & full-stack developer',
  keywords: ['Trupti Salve', 'Portfolio', 'Full Stack Developer', 'Python', 'React', 'Next.js'],
  authors: [{ name: 'Trupti Salve' }],
  openGraph: {
    title: 'Trupti Salve | Portfolio',
    description: 'Computer Science Engineering student & full-stack developer building data-driven applications',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a0f] text-slate-200 antialiased">
        {children}
      </body>
    </html>
  );
}
