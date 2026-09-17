'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@/lib/theme';

export function DepthGradient() {
  const { dark } = useTheme();
  const { scrollYProgress } = useScroll();

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.15, 0.4, 0.7]);

  const overlay = dark
    ? 'linear-gradient(180deg, transparent 0%, rgba(0, 20, 30, 0.5) 40%, rgba(0, 10, 20, 0.9) 100%)'
    : 'linear-gradient(180deg, transparent 0%, rgba(180, 210, 220, 0.3) 40%, rgba(150, 190, 200, 0.5) 100%)';

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: overlay,
        opacity: bgOpacity,
      }}
    />
  );
}
