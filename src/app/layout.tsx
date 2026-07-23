import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Jean Franky Nkot — AI Automation Specialist',
  description:
    'I build intelligent pipelines that automate repetitive tasks and save businesses time. n8n, Python, LLM.',
  keywords: ['AI automation', 'n8n', 'Python', 'LLM', 'workflow automation'],
  authors: [{ name: 'Jean Franky Nkot' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
