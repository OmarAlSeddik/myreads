import React, { useState } from "react";

import { Grid } from "@mui/material";

import BookBody from "./BookBody";
import BookMenu from "./BookMenu";
import BookFooter from "./BookFooter";

const Book = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      lg={2}
      sx={{ padding: 2.5 }}
    >
      <BookBody
        book={props.book}
        handleClick={handleClick}
        selectBook={props.selectBook}
        selectionMode={props.selectionMode}
      />
      <BookFooter book={props.book} />
      <BookMenu
        book={props.book}
        moveBook={props.moveBook}
        anchorEl={anchorEl}
        handleClose={handleClose}
        open={open}
      />
    </Grid>
  );
};

export default Book;
