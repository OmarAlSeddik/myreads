import React, { useState } from "react";

import { Stack } from "@mui/material";

import Book from "../../Book";
import Header from "./Header";

const Shelf = (props: any) => {
  const [filterExpanded, setFilterExpanded] = useState(false);
  const handleFilterExpand = (event: React.ChangeEvent<{}>) => {
    return setFilterExpanded(!filterExpanded);
  };
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const handleMobileExpand = (event: React.ChangeEvent<{}>) => {
    return setMobileExpanded(!mobileExpanded);
  };

  return (
    <Stack>
      <Header
        title={props.title}
        value={props.value}
        books={props.books}
        isMobile={props.isMobile}
        filterExpanded={filterExpanded}
        handleFilterExpand={handleFilterExpand}
        mobileExpanded={mobileExpanded}
        handleMobileExpand={handleMobileExpand}
        moveBooks={props.moveBooks}
      />
      <Stack
        direction="row"
        sx={{ overflowX: { xs: "auto" }, flexWrap: { lg: "wrap" } }}
      >
        {props.value === "currentlyReading" &&
          props.books
            .filter((book: any) => book.shelf === "currentlyReading")
            .map((book: any) => (
              <Book book={book} moveBook={props.moveBook} key={book.id} />
            ))}
        {props.value === "wantToRead" &&
          props.books
            .filter((book: any) => book.shelf === "wantToRead")
            .map((book: any) => (
              <Book book={book} moveBook={props.moveBook} key={book.id} />
            ))}
        {props.value === "read" &&
          props.books
            .filter((book: any) => book.shelf === "read")
            .map((book: any) => (
              <Book book={book} moveBook={props.moveBook} key={book.id} />
            ))}
      </Stack>
    </Stack>
  );
};

export default Shelf;
