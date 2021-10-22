import { Grid, Menu, MenuItem } from "@mui/material";

const BookMenu = (props: any) => {
  return (
    <Grid item>
      <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        open={props.open}
        onClose={props.handleClose}
        sx={{ ".MuiMenu-list": { padding: 0 } }}
      >
        <MenuItem
          divider
          disabled
          onClick={() => props.handleClose()}
          value="move"
        >
          Move to...
        </MenuItem>
        {props.book.shelf !== "currentlyReading" && (
          <MenuItem
            onClick={(event: any) => {
              props.handleClose();
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
              props.handleClose();
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
              props.handleClose();
              props.moveBook(props.book, "read");
            }}
            value="read"
          >
            Read
          </MenuItem>
        )}
        {props.book.shelf !== "none" && props.book.shelf !== undefined && (
          <MenuItem
            onClick={(event: any) => {
              props.handleClose();
              props.moveBook(props.book, "none");
            }}
            value="none"
          >
            None
          </MenuItem>
        )}
      </Menu>
    </Grid>
  );
};

export default BookMenu;
