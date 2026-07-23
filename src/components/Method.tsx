'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

export function Method() {
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';

  return (
    <section id="method" className={`grid grid-cols-12 gap-6 border-y py-28 ${ink}`}>
      <div className={`col-span-12 font-mono text-[10px] tracking-[.16em] md:col-span-2 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
        {t.model}
      </div>
      <div className="col-span-12 md:col-span-8">
        <h2 className="font-display text-[clamp(36px,5vw,68px)] font-bold leading-[.9] tracking-[-.07em]">
          {t.method}{' '}
          <span className={dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}>{t.methodHighlight}</span>
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {t.steps.map(([title, desc], i) => (
            <div key={title} className={`border-t pt-4 ${ink}`}>
              <p className={`font-mono text-xs ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>0{i + 1}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
              <p className={`mt-3 text-sm leading-6 ${muted}`}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
