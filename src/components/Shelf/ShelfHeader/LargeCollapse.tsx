import { Collapse, TextField } from "@mui/material";

const LargeCollapse = (props: any) => {
  return (
    <Collapse in={props.filterExpanded} timeout="auto" unmountOnExit>
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
    </Collapse>
  );
};

export default LargeCollapse;
