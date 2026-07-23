'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

export function Contact() {
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';
  const accent = dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]';
  const accentBg = dark ? 'bg-[#d5ff55] text-[#142019]' : 'bg-[#1a5c3a] text-white';

  const whatsappMsg = lang === 'EN'
    ? 'Hi Jean Franky, I saw your portfolio and would like to discuss a project.'
    : 'Bonjour Jean Franky, j\'ai vu ton portfolio et j\'aimerais discuter d\'un projet.';
  const whatsappUrl = `https://wa.me/237656554038?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <section id="contact" className="grid grid-cols-12 items-start gap-6 py-24">
      <p className={`col-span-12 self-start font-mono text-[10px] tracking-[.16em] md:col-span-2 ${accent}`}>
        {t.contact}
      </p>
      <div className="col-span-12 md:col-span-5">
        <p className={`font-mono text-xs ${muted}`}>{t.contactTop}</p>
        <a
          href="mailto:jeanfrankynkot@gmail.com"
          className={`mt-8 block font-display text-[clamp(32px,5vw,72px)] font-bold leading-[.86] tracking-[-.075em] underline decoration-4 underline-offset-8 ${dark ? 'decoration-[#d5ff55]' : 'decoration-[#1a5c3a]'}`}
        >
          jeanfrankynkot
          <br />
          @gmail.com
        </a>
        <div className="mt-12 flex gap-7 font-mono text-[11px] tracking-[.12em]">
          <a href="https://www.linkedin.com/in/jean-franky-nkot" target="_blank" rel="noopener noreferrer">
            LINKEDIN ↗
          </a>
          <a href="https://github.com/franky-nkot" target="_blank" rel="noopener noreferrer">
            GITHUB ↗
          </a>
        </div>
        <div className={`mt-10 font-mono text-[10px] leading-5 whitespace-pre-line ${accent}`}>
          {t.available}
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <div className={`rounded-lg border p-8 ${ink}`}>
          <p className={`font-mono text-[10px] tracking-[.12em] ${muted}`}>
            {lang === 'EN' ? 'FASTEST WAY TO REACH ME' : 'LE PLUS RAPIDE POUR ME JOINDRE'}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 block w-full rounded-lg py-4 text-center font-mono text-[11px] font-semibold tracking-[.12em] transition hover:opacity-90 ${accentBg}`}
          >
            {lang === 'EN' ? 'MESSAGE ON WHATSAPP →' : 'ÉCRIRE SUR WHATSAPP →'}
          </a>
          <p className={`mt-6 text-center font-mono text-[10px] ${muted}`}>
            +237 656 554 038
          </p>
        </div>
      </div>
    </section>
  );
}
