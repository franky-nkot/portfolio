'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

export function Footer() {
  const { dark, lang } = useTheme();
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';
  const t = copy[lang];

  return (
    <footer className={`border-t ${ink}`}>
      <div className="mx-auto flex max-w-[1360px] justify-between px-8 py-5 font-mono text-[10px] tracking-[.12em]">
        <span>© J.F. NKOT / 2026</span>
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}
