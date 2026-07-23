'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

export function Header() {
  const { dark, setDark, lang, setLang } = useTheme();
  const t = copy[lang];
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${ink} ${
        dark ? 'bg-[#142019]/85' : 'bg-[#f4f0e8]/85'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between px-8">
        <a href="#top" className="font-mono text-xs tracking-[.15em]">
          JFN<span className={`ml-1 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>/</span>26
        </a>
        <nav className="hidden gap-7 font-mono text-[10px] tracking-[.14em] md:flex">
          <a href="#work">{t.nav[0]}</a>
          <a href="#stack">{t.nav[1]}</a>
          <a href="#method">{t.nav[2]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </nav>
        <div className="flex gap-2">
          <button
            onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
            className={`rounded-full border px-3 py-1.5 font-mono text-[10px] ${ink}`}
          >
            {lang}
          </button>
          <button
            onClick={() => setDark(!dark)}
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] ${ink}`}
          >
            <i
              className={`h-2 w-2 rounded-full ${dark ? 'bg-[#d5ff55]' : 'bg-[#ff694f]'}`}
            />
            {dark ? t.view : t.dayView}
          </button>
        </div>
      </div>
    </header>
  );
}
