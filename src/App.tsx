import React, { useMemo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { green } from "@mui/material/colors";

import Header from "./components/Header.tsx";
import Home from "./components/Home";
import Search from "./components/Search";
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

  let theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === "dark" ? green[400] : green[900],
          },
        },
      }),
    [themeMode]
  );

  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [pageValue, setPageValue] = useStickyState(0, "page");
  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPageValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Header
          themeMode={themeMode}
          toggleTheme={toggleTheme}
          isMobile={isMobile}
          pageValue={pageValue}
          handlePageChange={handlePageChange}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
