import { ThemeProvider } from '@mui/material/styles';

import { useTheme } from '../hooks/useTheme';
import MainPage from '../pages/main-page/MainPage';

export default function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MainPage />
    </ThemeProvider>
  );
}
