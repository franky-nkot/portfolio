'use client';

import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';
import { stack, certifications } from '@/data/stack';

function LevelDots({ level, dark }: { level: string; dark: boolean }) {
  const count = level === 'expert' ? 4 : level === 'advanced' ? 3 : 2;
  const active = dark ? 'bg-[#d5ff55]' : 'bg-[#1a5c3a]';
  return (
    <div className="flex gap-1">
      {[0, 1, 2, 3].map((i) => (
        <i
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${
            i < count ? active : 'bg-current/20'
          }`}
        />
      ))}
    </div>
  );
}

export function StackSection() {
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';

  return (
    <section id="stack" className={`border-y py-28 ${ink}`}>
      <div className="mb-16 grid grid-cols-12 gap-6">
        <p className={`col-span-12 font-mono text-[10px] tracking-[.16em] md:col-span-2 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
          {t.capabilities}
        </p>
        <h2 className="col-span-12 font-display text-5xl font-bold leading-none tracking-[-.06em] md:col-span-7">
          {t.stackTitle}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {stack.map((category) => (
          <div key={category.title}>
            <h3 className={`mb-4 font-mono text-xs tracking-[.12em] ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
              {lang === 'EN' ? category.title : category.titleFr}
            </h3>
            <div className={`divide-y ${ink}`}>
              {category.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center justify-between py-3.5"
                >
                  <span className="text-sm font-medium">{tool.name}</span>
                  <div className="flex items-center gap-3">
                    <span className={`font-mono text-[10px] ${muted}`}>
                      {tool.level}
                    </span>
                    <LevelDots level={tool.level} dark={dark} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className={`mb-8 font-mono text-xs tracking-[.12em] ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
          {t.certsTitle}
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          {certifications.map((cert) => (
            <div key={cert.title} className={`rounded-lg border p-5 ${ink}`}>
              <div className={`mb-4 font-mono text-[10px] ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
                {cert.issuer}
              </div>
              <p className="text-sm font-medium leading-5">{cert.title}</p>
              <p className={`mt-2 font-mono text-[10px] ${muted}`}>{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
