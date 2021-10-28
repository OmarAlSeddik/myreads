import { useState } from "react";
import { Collapse, Stack, Button, Menu, MenuItem } from "@mui/material";

const SelectionCollapse = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Collapse in={props.selectionMode} timeout="auto" unmountOnExit>
      <Stack direction="row" justifyContent="center">
        <Button
          size="small"
          variant="contained"
          disabled={
            props.selectedBooks.length ===
            props.books.filter(
              (book: any) =>
                props.match.test(book.title) || props.match.test(book.authors)
            ).length
          }
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={props.selectAll}
        >
          Select All
        </Button>
        <Button
          size="small"
          variant="contained"
          disabled={props.selectedBooks.length === 0}
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={handleClick}
        >
          Move To...
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          disabled={props.selectedBooks.length === 0}
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={props.deselectAll}
        >
          Deselect All
        </Button>
      </Stack>
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
        {props.shelfValue !== "currentlyReading" && (
          <MenuItem
            onClick={(event: any) => {
              handleClose();
              props.moveBooks(props.selectedBooks, "currentlyReading");
              props.deselectAll();
            }}
            value="currentlyReading"
          >
            Currently Reading
          </MenuItem>
        )}
        {props.shelfValue !== "wantToRead" && (
          <MenuItem
            onClick={(event: any) => {
              handleClose();
              props.moveBooks(props.selectedBooks, "wantToRead");
              props.deselectAll();
            }}
            value="wantToRead"
          >
            Want to Read
          </MenuItem>
        )}

        {props.shelfValue !== "read" && (
          <MenuItem
            onClick={(event: any) => {
              handleClose();
              props.moveBooks(props.selectedBooks, "read");
              props.deselectAll();
            }}
            value="read"
          >
            Read
          </MenuItem>
        )}

        <MenuItem
          onClick={(event: any) => {
            handleClose();
            props.moveBooks(props.selectedBooks, "none");
            props.deselectAll();
          }}
          value="none"
        >
          None
        </MenuItem>
      </Menu>
    </Collapse>
  );
};

export default SelectionCollapse;
