import React from 'react';
import { createTheme } from '@mui/material';
import { useThemeStore } from '../stores/useThemeStore';

export function useTheme() {
  const mode = useThemeStore((state) => state.mode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return {
    theme,
    themeMode: mode,
    toggleTheme,
  };
}
