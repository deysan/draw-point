import type { PaletteMode } from '@mui/material';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeStore = {
  mode: PaletteMode;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => {
      const prefersDarkMode =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

      return {
        mode: prefersDarkMode ? 'dark' : 'light',
        toggleTheme: () => {
          set((state) => ({
            mode: state.mode === 'light' ? 'dark' : 'light',
          }));
        },
      };
    },
    {
      name: 'theme',
    }
  )
);
