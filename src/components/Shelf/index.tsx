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
        moveBooks={props.moveBooks}
        filterQuery={filterQuery}
        handleFilter={handleFilter}
      />
      <ShelfBody books={props.books} filterQuery={filterQuery} />
    </Stack>
  );
};

export default Shelf;
