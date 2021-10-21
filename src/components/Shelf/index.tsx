import React, { useState } from "react";

import { Stack } from "@mui/material";

import ShelfHeader from "./ShelfHeader";
import ShelfBody from "./ShelfBody";

const Shelf = (props: any) => {
  const [filterExpanded, setFilterExpanded] = useState(false);
  const handleFilterExpand = (event: React.ChangeEvent<{}>) => {
    return setFilterExpanded(!filterExpanded);
  };

  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleMobileExpand = (event: React.ChangeEvent<{}>) => {
    return setMobileExpanded(!mobileExpanded);
  };

  const [filterQuery, setFilterQuery] = useState("");
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterQuery(event.target.value);
  };

  const [dialog, setDialog] = useState(false);
  const handleDialogOpen = () => setDialog(true);
  const handleDialogClose = () => setDialog(false);

  const [selectionMode, setSelectionMode] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([] as any[]);

  const toggleSelectionMode = () => setSelectionMode(!selectionMode);

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

  const selectAll = () => setSelectedBooks(props.books);
  const deselectAll = () => setSelectedBooks([]);

  return (
    <Stack>
      <ShelfHeader
        title={props.title}
        value={props.value}
        books={props.books}
        isMobile={props.isMobile}
        filterExpanded={filterExpanded}
        handleFilterExpand={handleFilterExpand}
        mobileExpanded={mobileExpanded}
        handleMobileExpand={handleMobileExpand}
        moveBook={props.moveBook}
        moveBooks={props.moveBooks}
        filterQuery={filterQuery}
        handleFilter={handleFilter}
        dialog={dialog}
        handleDialogOpen={handleDialogOpen}
        handleDialogClose={handleDialogClose}
        selectionMode={selectionMode}
        toggleSelectionMode={toggleSelectionMode}
        selectAll={selectAll}
        deselectAll={deselectAll}
      />
      <ShelfBody
        books={props.books}
        filterQuery={filterQuery}
        moveBook={props.moveBook}
        value={props.value}
        displayedResults={props.displayedResults}
        selectBook={selectBook}
        deselectBook={deselectBook}
      />
    </Stack>
  );
};

export default Shelf;
