import React, { useMemo } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { blue, pink, green, amber } from "@mui/material/colors";

import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import useStickyState from "./hooks/useStickyState";
import useBook from "./hooks/useBook";
import { update } from "./BooksAPI";

const App = () => {
  // Theme Section
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

  const colors = [blue, pink, green, amber];
  const [themeColor, setThemeColor] = useStickyState(blue, "themeColor");

  let theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === "dark" ? themeColor[400] : themeColor[900],
          },
        },
      }),
    [themeMode, themeColor]
  );

  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Routing Section
  const [pageValue, setPageValue] = useStickyState(0, "page");
  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPageValue(newValue);
  };

  // Book Management Section
  const [books, setBooks, bookIdMap] = useBook([] as any);

  const moveBook = (targetBook: any, destination: string) => {
    const changeBookShelf = () => {
      targetBook.shelf = destination;
      return targetBook;
    };
    const updatedBooks = books.map((book: any) => {
      return book.id === targetBook.id ? changeBookShelf() : book;
    });
    if (!bookIdMap.has(targetBook.id)) {
      targetBook.shelf = destination;
      updatedBooks.push(targetBook);
    }
    setBooks(updatedBooks);
    update(targetBook, destination);
  };

  const moveBooks = (targetBooks: Array<any>, destination: string) => {
    return targetBooks.map((book: any) => moveBook(book, destination));
  };

  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <CssBaseline />
        <Header
          themeMode={themeMode}
          toggleTheme={toggleTheme}
          isMobile={isMobile}
          pageValue={pageValue}
          handlePageChange={handlePageChange}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                isMobile={isMobile}
                books={books}
                setBooks={setBooks}
                moveBook={moveBook}
                moveBooks={moveBooks}
                colors={colors}
                themeColor={themeColor}
                setThemeColor={setThemeColor}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                isMobile={isMobile}
                books={books}
                setBooks={setBooks}
                moveBook={moveBook}
                moveBooks={moveBooks}
                bookIdMap={bookIdMap}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
