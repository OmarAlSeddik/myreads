import { useContext } from "react";
import ShelfContext from "../../../store/ShelfContext";

import {
  Collapse,
  Stack,
  TextField,
  ButtonGroup,
  Button,
  Divider,
} from "@mui/material";

import SelectAllIcon from "@mui/icons-material/SelectAll";
import ClearIcon from "@mui/icons-material/Clear";

const MobileCollapse = () => {
  const shelfContext = useContext(ShelfContext);

  return (
    <Collapse in={shelfContext.mobileExpanded} timeout="auto" unmountOnExit>
      <Stack direction="row">
        <TextField
          placeholder="Filter"
          variant="standard"
          size="small"
          fullWidth={true}
          sx={{
            ".MuiInput-input": {
              borderRadius: 0,
              backgroundColor: "divider",
              paddingLeft: 2,
              fontSize: "1.5rem",
            },
          }}
          value={shelfContext.filterQuery}
          onChange={shelfContext.handleFilter}
        />
        <ButtonGroup
          variant="text"
          size="small"
          sx={{
            ".MuiButtonGroup-grouped": {
              textTransform: "capitalize",
            },
          }}
        >
          <Button
            startIcon={<SelectAllIcon />}
            onClick={shelfContext.toggleSelectionMode}
          >
            Select
          </Button>
          <Button
            startIcon={<ClearIcon />}
            color="error"
            onClick={shelfContext.handleDialogOpen}
          >
            Clear
          </Button>
        </ButtonGroup>
      </Stack>
      <Divider />
    </Collapse>
  );
};

export default MobileCollapse;
