import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/inter';

import { ThemeProvider } from '@emotion/react'
import {theme} from "./theme.js";
import App from './App.jsx';

import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider  theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)
