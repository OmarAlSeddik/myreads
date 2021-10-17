import React, { useMemo, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import Header from "./components/Header";
import Home from "./components/Home";
import Search from "./components/Search";
import useStickyState from "./hooks/useStickyState";
import { getAll, update } from "./BooksAPI";

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

  let theme: any = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === "dark" ? blue[400] : blue[900],
          },
        },
      }),
    [themeMode]
  );

  theme = responsiveFontSizes(theme);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Routing Section

  const [pageValue, setPageValue] = useStickyState(0, "page");
  const handlePageChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setPageValue(newValue);
  };

  // Book Management Section

  const [books, setBooks] = useState([] as any[]);

  useEffect(() => {
    getAll().then((data) => {
      setBooks(data);
    });
  }, []);

  const moveBook = (targetBook: any, destination: string) => {
    const changeBookShelf = () => {
      targetBook.shelf = destination;
      return targetBook;
    };
    const updatedBooks = books.map((book) => {
      return book.id === targetBook.id ? changeBookShelf() : book;
    });
    setBooks(updatedBooks);
    update(targetBook, destination);
  };

  const moveBooks = (targetBooks: Array<any>, destination: string) => {
    return targetBooks.map((book: any) => moveBook(book, destination));
  };

  useEffect(() => {
    console.log(books);
  }, [books]);

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
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search isMobile={isMobile} books={books} setBooks={setBooks} />
            )}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
