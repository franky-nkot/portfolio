'use client';

import { useState } from 'react';
import { ThemeContext } from '@/lib/theme';
import type { Lang } from '@/data/copy';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Work } from '@/components/Work';
import { StackSection, CertsSection } from '@/components/Stack';
import { Method } from '@/components/Method';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Bubbles } from '@/components/Bubbles';
import { DepthGradient } from '@/components/DepthGradient';
import { DepthSection } from '@/components/DepthSection';

export default function Home() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState<Lang>('EN');

  const tone = dark ? 'bg-[#142019] text-[#f5f0e8]' : 'bg-[#f4f0e8] text-[#18201b]';

  return (
    <ThemeContext.Provider value={{ dark, setDark, lang, setLang }}>
      <div className={`min-h-screen transition-colors duration-500 ${tone}`}>
        <Bubbles />
        <DepthGradient />
        <Header />
        <main id="top" className="relative z-10 mx-auto max-w-[1360px] px-8 pt-16">
          <Hero />
          <DepthSection depth={0}>
            <Work />
          </DepthSection>
          <DepthSection depth={1}>
            <StackSection />
          </DepthSection>
          <DepthSection depth={2}>
            <CertsSection />
          </DepthSection>
          <DepthSection depth={3}>
            <Method />
          </DepthSection>
          <DepthSection depth={4}>
            <Contact />
          </DepthSection>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
