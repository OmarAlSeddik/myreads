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

const MobileCollapse = (props: any) => {
  return (
    <Collapse in={props.mobileExpanded} timeout="auto" unmountOnExit>
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
          value={props.filterQuery}
          onChange={props.handleFilter}
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
            onClick={props.toggleSelectionMode}
          >
            Select
          </Button>
          <Button
            startIcon={<ClearIcon />}
            color="error"
            onClick={props.handleDialogOpen}
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
