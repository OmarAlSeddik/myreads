import { useContext, useState } from "react";
import AppContext from "../../../store/AppContext";
import ShelfContext from "../../../store/ShelfContext";
import { Collapse, Stack, Button, Menu, MenuItem } from "@mui/material";

const SelectionCollapse = (props: any) => {
  const context = useContext(AppContext);
  const shelfContext = useContext(ShelfContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Collapse in={shelfContext.selectionMode} timeout="auto" unmountOnExit>
      <Stack direction="row" justifyContent="center">
        <Button
          size="small"
          variant="contained"
          disabled={
            shelfContext.selectedBooks.length ===
            props.books.filter(
              (book: any) =>
                shelfContext.match.test(book.title) ||
                shelfContext.match.test(book.authors)
            ).length
          }
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={() => shelfContext.selectAll(props.books)}
        >
          Select All
        </Button>
        <Button
          size="small"
          variant="contained"
          disabled={shelfContext.selectedBooks.length === 0}
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={handleClick}
        >
          Move To...
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          disabled={shelfContext.selectedBooks.length === 0}
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={shelfContext.deselectAll}
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
              context.moveBooks(shelfContext.selectedBooks, "currentlyReading");
              shelfContext.deselectAll();
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
              context.moveBooks(shelfContext.selectedBooks, "wantToRead");
              shelfContext.deselectAll();
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
              context.moveBooks(shelfContext.selectedBooks, "read");
              shelfContext.deselectAll();
            }}
            value="read"
          >
            Read
          </MenuItem>
        )}

        <MenuItem
          onClick={(event: any) => {
            handleClose();
            context.moveBooks(shelfContext.selectedBooks, "none");
            shelfContext.deselectAll();
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
