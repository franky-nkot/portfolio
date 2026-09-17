'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface DepthSectionProps {
  children: React.ReactNode;
  depth?: number;
}

export function DepthSection({ children, depth = 0 }: DepthSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'],
  });

  const intensity = isMobile ? 0.4 : 1;

  const z = useTransform(scrollYProgress, [0, 1], [(-200 - depth * 50) * intensity, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1 - 0.2 * intensity, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8 * intensity, 2 * intensity, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.6, 1]);
  const blurVal = useTransform(scrollYProgress, [0, 0.4, 1], [6 * intensity, 2 * intensity, 0]);

  return (
    <div ref={ref} style={{ perspective: '1000px', perspectiveOrigin: '50% 50%' }}>
      <motion.div
        style={{
          translateZ: z,
          scale,
          rotateX,
          opacity,
          filter: useTransform(blurVal, (v) => `blur(${v}px)`),
          transformStyle: 'preserve-3d',
          transformOrigin: 'center top',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
