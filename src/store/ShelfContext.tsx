import { createContext, useState } from "react";

import escapeStringRegexp from "escape-string-regexp";

interface ShelfContextInterface {
  filterExpanded: boolean;
  handleFilterExpand: (event: React.ChangeEvent<{}>) => void;
  mobileExpanded: boolean;
  handleMobileExpand: (event: React.ChangeEvent<{}>) => void;
  filterQuery: string;
  handleFilter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  match: RegExp;
  dialog: boolean;
  handleDialogOpen: () => any;
  handleDialogClose: () => any;
  selectionMode: boolean;
  toggleSelectionMode: () => any;
  selectedBooks: any[];
  selectBook: (arg0: any) => void;
  selectAll: () => any;
  deselectBook: (arg0: any) => void;
  deselectAll: () => any;
}

const ShelfContext = createContext<ShelfContextInterface>({
  filterExpanded: false,
  handleFilterExpand: () => {},
  mobileExpanded: false,
  handleMobileExpand: () => {},
  filterQuery: "",
  handleFilter: () => {},
  match: RegExp(escapeStringRegexp(""), "i"),
  dialog: false,
  handleDialogOpen: () => {},
  handleDialogClose: () => {},
  selectionMode: false,
  toggleSelectionMode: () => {},
  selectedBooks: [],
  selectBook: () => {},
  selectAll: () => {},
  deselectBook: () => {},
  deselectAll: () => {},
});

export const ShelfContextProvider = (props: any) => {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleMobileExpand = (event: React.ChangeEvent<{}>) => {
    return setMobileExpanded(!mobileExpanded);
  };

  const [filterExpanded, setFilterExpanded] = useState(false);
  const handleFilterExpand = (event: React.ChangeEvent<{}>) => {
    return setFilterExpanded(!filterExpanded);
  };

  const [filterQuery, setFilterQuery] = useState("");
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  const match = new RegExp(escapeStringRegexp(filterQuery), "i");

  const [dialog, setDialog] = useState(false);
  const handleDialogOpen = () => setDialog(true);
  const handleDialogClose = () => setDialog(false);

  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([] as any[]);

  const toggleSelectionMode = () => {
    if (selectionMode === false) setSelectionMode(true);
    if (selectionMode === true) {
      setSelectionMode(false);
      setSelectedBooks([]);
    }
  };

  const selectBook = (targetBook: any) => {
    if (selectionMode)
      setSelectedBooks(
        selectedBooks
          .filter((book: any) => book.id !== targetBook.id)
          .concat([targetBook])
      );
  };
  const deselectBook = (targetBook: any) => {
    if (selectionMode)
      setSelectedBooks(
        selectedBooks.filter((book: any) => book.id !== targetBook.id)
      );
  };

  const selectAll = () =>
    setSelectedBooks(
      props.books.filter(
        (book: any) => match.test(book.title) || match.test(book.authors)
      )
    );
  const deselectAll = () => setSelectedBooks([]);

  return (
    <ShelfContext.Provider
      value={{
        filterExpanded: filterExpanded,
        handleFilterExpand: handleFilterExpand,
        mobileExpanded: mobileExpanded,
        handleMobileExpand: handleMobileExpand,
        filterQuery: filterQuery,
        handleFilter: handleFilter,
        match: match,
        dialog: dialog,
        handleDialogOpen: handleDialogOpen,
        handleDialogClose: handleDialogClose,
        selectionMode: selectionMode,
        toggleSelectionMode: toggleSelectionMode,
        selectedBooks: selectedBooks,
        selectBook: selectBook,
        selectAll: selectAll,
        deselectBook: deselectBook,
        deselectAll: deselectAll,
      }}
    >
      {props.children}
    </ShelfContext.Provider>
  );
};

export default ShelfContext;
