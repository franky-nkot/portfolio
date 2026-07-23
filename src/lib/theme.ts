'use client';

import { createContext, useContext } from 'react';
import type { Lang } from '@/data/copy';

interface ThemeContextValue {
  dark: boolean;
  setDark: (v: boolean) => void;
  lang: Lang;
  setLang: (v: Lang) => void;
}

export const ThemeContext = createContext<ThemeContextValue>({
  dark: true,
  setDark: () => {},
  lang: 'EN',
  setLang: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
