import React, { useState } from "react";

import {
  Box,
  Typography,
  ButtonBase,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";

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
      sx={{ padding: 3 }}
    >
      <Grid item>
        <ButtonBase onClick={handleClick}>
          <Box
            sx={{
              width: "8rem",
              height: "12rem",
              backgroundSize: "cover",
              backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
            }}
          />
        </ButtonBase>
      </Grid>
      <Grid item>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          open={open}
          onClose={handleClose}
          sx={{ ".MuiMenu-list": { padding: 0 } }}
        >
          <MenuItem divider disabled onClick={() => handleClose()} value="move">
            Move to...
          </MenuItem>
          {props.book.shelf !== "currentlyReading" && (
            <MenuItem
              onClick={(event: any) => {
                handleClose();
                props.moveBook(props.book, "currentlyReading");
              }}
              value="currentlyReading"
            >
              Currently Reading
            </MenuItem>
          )}
          {props.book.shelf !== "wantToRead" && (
            <MenuItem
              onClick={(event: any) => {
                handleClose();
                props.moveBook(props.book, "wantToRead");
              }}
              value="wantToRead"
            >
              Want to Read
            </MenuItem>
          )}
          {props.book.shelf !== "read" && (
            <MenuItem
              onClick={(event: any) => {
                handleClose();
                props.moveBook(props.book, "read");
              }}
              value="read"
            >
              Read
            </MenuItem>
          )}
          {props.book.shelf !== undefined && (
            <MenuItem
              onClick={(event: any) => {
                handleClose();
                props.moveBook(props.book, undefined);
              }}
              value={undefined}
            >
              None
            </MenuItem>
          )}
        </Menu>
      </Grid>
      <Grid item>
        <Typography align="center">{props.book.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" align="center" color="text.secondary">
          {props.book.authors}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Book;
