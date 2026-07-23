'use client';

import { useState } from 'react';
import { ThemeContext } from '@/lib/theme';
import type { Lang } from '@/data/copy';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { StackSection } from '@/components/Stack';
import { Method } from '@/components/Method';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<Lang>('EN');

  const tone = dark ? 'bg-[#142019] text-[#f5f0e8]' : 'bg-[#f4f0e8] text-[#18201b]';

  return (
    <ThemeContext.Provider value={{ dark, setDark, lang, setLang }}>
      <div className={`min-h-screen transition-colors duration-500 ${tone}`}>
        <Header />
        <main id="top" className="mx-auto max-w-[1360px] px-8 pt-16">
          <Hero />
          <Work />
          <StackSection />
          <Method />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
