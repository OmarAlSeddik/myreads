import React, { useMemo } from "react";

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { green } from "@mui/material/colors";

import Header from "./components/Header.tsx";
import Home from "./components/Home";
import useStickyState from "./hooks/useStickyState";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useStickyState(
    prefersDarkMode ? "dark" : "light",
    "theme"
  );

  const toggleTheme = (event: React.ChangeEvent<{}>) => {
    setThemeMode((previous: string) => {
      return previous === "dark" ? "light" : "dark";
    });
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: green,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header themeMode={themeMode} toggleTheme={toggleTheme} />
      <Home />
    </ThemeProvider>
  );
};

export default App;
