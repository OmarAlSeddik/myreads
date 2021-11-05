import React, { useState } from "react";

import { Stack } from "@mui/material";

import escapeStringRegexp from "escape-string-regexp";

import ShelfHeader from "./ShelfHeader";
import ShelfBody from "./ShelfBody";

const Shelf = (props: any) => {
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
    <Stack>
      <ShelfHeader
        shelfTitle={props.shelfTitle}
        shelfValue={props.shelfValue}
        books={props.books}
        moveBook={props.moveBook}
        moveBooks={props.moveBooks}
        filterExpanded={filterExpanded}
        handleFilterExpand={handleFilterExpand}
        mobileExpanded={mobileExpanded}
        handleMobileExpand={handleMobileExpand}
        filterQuery={filterQuery}
        handleFilter={handleFilter}
        match={match}
        dialog={dialog}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        selectedBooks={selectedBooks}
        selectAll={selectAll}
        deselectAll={deselectAll}
      />
      <ShelfBody
        books={props.books}
        filterQuery={filterQuery}
        selectionMode={selectionMode}
        selectedBooks={selectedBooks}
        selectBook={selectBook}
        deselectBook={deselectBook}
        match={match}
      />
    </Stack>
  );
};

export default Shelf;
