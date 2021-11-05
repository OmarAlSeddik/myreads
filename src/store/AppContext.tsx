import React, { useMemo } from "react";
import useBook from "../hooks/useBook";
import { update } from "../BooksAPI";

import {
  useMediaQuery,
  createTheme,
  responsiveFontSizes,
  CssBaseline,
} from "@mui/material";
import useStickyState from "../hooks/useStickyState";

import { blue, pink, green, amber } from "@mui/material/colors";
import { ThemeProvider } from "@mui/material/styles";

interface AppContextInterface {
  themeMode: string;
  toggleTheme: any;
  colors: any;
  themeColor: any;
  setThemeColor: any;
  theme: any;
  isMobile: boolean;
  pageValue: number;
  handlePageChange: any;
  books: any;
  setBooks: any;
  moveBook: any;
  moveBooks: any;
  bookIdMap: any;
}

const AppContext = React.createContext<AppContextInterface>({
  themeMode: "dark",
  toggleTheme: () => {},
  colors: [],
  themeColor: blue,
  setThemeColor: () => {},
  theme: {},
  isMobile: false,
  pageValue: 0,
  handlePageChange: () => {},
  books: [],
  setBooks: () => {},
  moveBook: () => {},
  moveBooks: () => {},
  bookIdMap: [],
});

export const AppContextProvider = (props: any) => {
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
    <AppContext.Provider
      value={{
        themeMode: themeMode,
        toggleTheme: toggleTheme,
        colors: colors,
        themeColor: themeColor,
        setThemeColor: setThemeColor,
        theme: theme,
        isMobile: isMobile,
        pageValue: pageValue,
        handlePageChange: handlePageChange,
        books: books,
        setBooks: setBooks,
        moveBook: moveBook,
        moveBooks: moveBooks,
        bookIdMap: bookIdMap,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppContext;
