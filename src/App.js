import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';

import MainApp from './Components/Main/MainApp';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#536dfe"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <MainApp />
    </ThemeProvider>
  );
}