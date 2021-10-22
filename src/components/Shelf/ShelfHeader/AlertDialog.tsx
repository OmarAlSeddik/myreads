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
  return (
    <Dialog open={props.dialog} onClose={props.handleDialogClose}>
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
            onClick={props.handleDialogClose}
            autoFocus
          >
            Cancel
          </Button>
          <Button
            startIcon={<ClearIcon />}
            color="error"
            onClick={() => {
              props.handleDialogClose();
              props.moveBooks(props.books, "none");
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
