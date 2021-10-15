import React, { useState } from "react";

import { Stack } from "@mui/material";

import Book from "../Book";
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
        isMobile={props.isMobile}
        filterExpanded={filterExpanded}
        handleFilterExpand={handleFilterExpand}
        mobileExpanded={mobileExpanded}
        handleMobileExpand={handleMobileExpand}
      />
      <Stack
        direction="row"
        sx={{ overflowX: { xs: "auto" }, flexWrap: { lg: "wrap" } }}
      >
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
      </Stack>
    </Stack>
  );
};

export default Shelf;
