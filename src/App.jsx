import '@fontsource/inter';
import { useState } from 'react';
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import ResponsiveDrawer from "./components/ResponsiveDrawer"
import Rightbar from "./components/Rightbar"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import CssBaseline from '@mui/material/CssBaseline';

const App = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Stack direction="row" spacing={1} justifyContent="space-between">
          <ResponsiveDrawer mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default App
