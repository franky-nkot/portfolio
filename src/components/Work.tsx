'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';
import { projects } from '@/data/projects';

export function Work() {
  const [open, setOpen] = useState<number | null>(null);
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';
  const langKey = lang.toLowerCase() as 'en' | 'fr';

  return (
    <section id="work" className="py-28">
      <div className="mb-16 grid grid-cols-12 gap-6">
        <p className={`col-span-12 font-mono text-[10px] tracking-[.16em] md:col-span-2 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
          {t.field}
        </p>
        <h2 className="col-span-12 font-display text-5xl font-bold leading-none tracking-[-.06em] md:col-span-7">
          {t.proof}
        </h2>
        <p className={`col-span-12 text-sm leading-6 md:col-span-3 ${muted}`}>
          {t.proofText}
        </p>
      </div>
      <div className={`border-t ${ink}`}>
        {projects.map((p, i) => (
          <article key={p.name} className={`group border-b ${ink}`}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="grid w-full grid-cols-12 items-center gap-6 py-7 text-left"
            >
              <span className={`col-span-1 font-mono text-xs ${muted}`}>{p.no}</span>
              <span className="col-span-4 font-display text-2xl font-bold tracking-[-.055em] group-hover:italic md:text-4xl">
                {p.name}
              </span>
              <span className={`col-span-3 hidden text-sm md:block ${muted}`}>
                {p[langKey][0]}
              </span>
              <span className="col-span-5 font-mono text-3xl tracking-[-.08em] md:col-span-3 md:text-4xl">
                {p.metric}
              </span>
              <span className="col-span-2 text-right font-mono text-lg md:col-span-1">
                {open === i ? '−' : '+'}
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-12 gap-6 pb-8">
                    <div className={`col-start-2 col-span-2 h-24 rounded-lg ${p.color}`} />
                    <p className={`col-span-12 text-sm leading-6 md:col-span-4 ${muted}`}>
                      {p[langKey][1]}
                    </p>
                    <div className="col-span-12 flex flex-wrap content-start gap-2 md:col-span-4">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-full border px-3 py-1.5 font-mono text-[10px] ${ink}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </article>
        ))}
      </div>
    </section>
  );
}
