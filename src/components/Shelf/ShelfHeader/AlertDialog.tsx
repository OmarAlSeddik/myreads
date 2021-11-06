import { useContext } from "react";
import AppContext from "../../../store/AppContext";
import ShelfContext from "../../../store/ShelfContext";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  ButtonGroup,
  Button,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import UndoIcon from "@mui/icons-material/Undo";

const AlertDialog = (props: any) => {
  const context = useContext(AppContext);
  const shelfContext = useContext(ShelfContext);

  return (
    <Dialog open={shelfContext.dialog} onClose={shelfContext.handleDialogClose}>
      <DialogTitle>Clear all books from this shelf?</DialogTitle>
      <DialogContent>
        <DialogContentText>You can't undo this action.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <ButtonGroup
          variant="text"
          size="large"
          sx={{
            ".MuiButtonGroup-grouped": {
              textTransform: "capitalize",
            },
          }}
        >
          <Button
            startIcon={<UndoIcon />}
            onClick={shelfContext.handleDialogClose}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            startIcon={<ClearIcon />}
            color="error"
            onClick={() => {
              shelfContext.handleDialogClose();
              context.moveBooks(props.books, "none");
            }}
          >
            Delete
          </Button>
        </ButtonGroup>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
