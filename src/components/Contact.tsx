'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from '@/lib/theme';
import { copy } from '@/data/copy';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const { dark, lang } = useTheme();
  const t = copy[lang];
  const muted = dark ? 'text-[#b9c0b4]' : 'text-[#5e675f]';
  const ink = dark ? 'border-[#f5f0e8]/20' : 'border-[#18201b]/20';
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="grid grid-cols-12 items-start gap-6 py-24">
      <p className={`col-span-12 self-start font-mono text-[10px] tracking-[.16em] md:col-span-2 ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
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
        <div className={`mt-10 font-mono text-[10px] leading-5 whitespace-pre-line ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>
          {t.available}
        </div>
      </div>
      <div className="col-span-12 md:col-span-5">
        <form onSubmit={handleSubmit(onSubmit)} className={`rounded-lg border p-8 ${ink}`}>
          <label className={`block font-mono text-[10px] tracking-[.12em] ${muted}`}>
            NAME
            <input
              {...register('name', { required: true })}
              placeholder={t.formName}
              className={`mt-3 w-full border-b bg-transparent py-3 text-sm outline-none placeholder:opacity-40 focus:border-current ${ink}`}
            />
          </label>
          <label className={`mt-7 block font-mono text-[10px] tracking-[.12em] ${muted}`}>
            EMAIL
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder={t.formEmail}
              className={`mt-3 w-full border-b bg-transparent py-3 text-sm outline-none placeholder:opacity-40 focus:border-current ${ink}`}
            />
          </label>
          <label className={`mt-7 block font-mono text-[10px] tracking-[.12em] ${muted}`}>
            MESSAGE
            <textarea
              {...register('message', { required: true })}
              placeholder={t.formMessage}
              className={`mt-3 h-28 w-full resize-none border-b bg-transparent py-3 text-sm outline-none placeholder:opacity-40 focus:border-current ${ink}`}
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className={`mt-8 w-full rounded-lg py-4 font-mono text-[11px] font-semibold tracking-[.12em] transition hover:opacity-90 disabled:opacity-50 ${dark ? 'bg-[#d5ff55] text-[#142019]' : 'bg-[#1a5c3a] text-white'}`}
          >
            {status === 'sending' ? '...' : t.formSend}
          </button>
          {status === 'success' && (
            <p className={`mt-4 font-mono text-[11px] ${dark ? 'text-[#d5ff55]' : 'text-[#1a5c3a]'}`}>{t.formSuccess}</p>
          )}
          {status === 'error' && (
            <p className="mt-4 font-mono text-[11px] text-[#ff694f]">{t.formError}</p>
          )}
        </form>
      </div>
    </section>
  );
}
