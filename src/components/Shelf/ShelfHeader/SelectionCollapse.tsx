import { Collapse, Stack, Button } from "@mui/material";

const SelectionCollapse = (props: any) => {
  return (
    <Collapse in={props.selectionMode} timeout="auto" unmountOnExit>
      <Stack direction="row" justifyContent="center">
        <Button
          size="small"
          variant="contained"
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={props.selectAll}
        >
          Select All
        </Button>
        <Button
          size="small"
          variant="contained"
          sx={{ margin: 1, textTransform: "capitalize" }}
        >
          Move To...
        </Button>
        <Button
          color="error"
          size="small"
          variant="contained"
          sx={{ margin: 1, textTransform: "capitalize" }}
          onClick={props.deselectAll}
        >
          Deselect All
        </Button>
      </Stack>
    </Collapse>
  );
};

export default SelectionCollapse;
