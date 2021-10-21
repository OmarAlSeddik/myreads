import { ButtonGroup, Button } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import ClearIcon from "@mui/icons-material/Clear";

const LargeView = (props: any) => {
  return (
    <ButtonGroup
      variant="text"
      size="small"
      sx={{
        ".MuiButtonGroup-grouped": {
          borderRadius: "1rem 1rem 0 0",
          textTransform: "capitalize",
        },
      }}
    >
      <Button startIcon={<SearchIcon />} onClick={props.handleFilterExpand}>
        Filter
      </Button>
      <Button startIcon={<SelectAllIcon />} onClick={props.toggleSelectionMode}>
        Select
      </Button>
      <Button
        startIcon={<ClearIcon />}
        color="error"
        onClick={props.handleDialogOpen}
      >
        Clear
      </Button>
      )
    </ButtonGroup>
  );
};

export default LargeView;
