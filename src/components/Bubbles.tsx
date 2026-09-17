'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/theme';

interface Bubble {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function Bubbles() {
  const { dark } = useTheme();
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const count = window.innerWidth < 768 ? 12 : 25;
    const generated: Bubble[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.3 + 0.05,
    }));
    setBubbles(generated);
  }, []);

  const color = dark ? '213,255,85' : '26,92,58';

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full animate-rise"
          style={{
            left: `${b.x}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            backgroundColor: `rgba(${color}, ${b.opacity})`,
            boxShadow: `0 0 ${b.size * 2}px rgba(${color}, ${b.opacity * 0.5})`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
