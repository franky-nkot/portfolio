'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

export function Hero() {
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';

  return (
    <section className="grid min-h-[calc(100vh-64px)] grid-cols-12 items-end gap-6 border-b border-current/20 pb-10 pt-20">
      <div className={`col-span-12 self-start pt-5 font-mono text-[10px] leading-5 tracking-[.12em] md:col-span-2 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
        {t.location}
        <br />
        03°52′N / 011°31′E
      </div>
      <div className="col-span-12 pb-4 md:col-span-8">
        <p className={`mb-7 font-mono text-[11px] tracking-[.18em] ${muted}`}>
          {t.label}
        </p>
        <h1 className="font-display text-[clamp(52px,10.5vw,165px)] font-bold leading-[.77] tracking-[-.085em]">
          {lang === 'EN' ? (
            <>
              I make
              <br />
              <em className="font-normal">work</em> disappear.
            </>
          ) : (
            <>
              Je fais
              <br />
              <em className="font-normal">disparaître</em> le travail.
            </>
          )}
        </h1>
        <p className={`mt-10 max-w-[470px] text-base leading-7 ${muted}`}>{t.intro}</p>
      </div>
      <div className="col-span-12 flex flex-col items-end gap-5 md:col-span-2">
        <div className={`grid h-28 w-28 place-items-center rounded-full border text-center font-mono text-[10px] whitespace-pre-line ${dark ? 'border-[#d5ff55] text-[#d5ff55]' : 'border-[#1a5c3a] text-[#1a5c3a]'}`}>
          {t.scroll}
        </div>
        <span className={`font-mono text-[10px] ${muted}`}>n8n / Python / LLM</span>
      </div>
    </section>
  );
}
