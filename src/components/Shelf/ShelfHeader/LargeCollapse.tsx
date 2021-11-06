import { useContext } from "react";
import ShelfContext from "../../../store/ShelfContext";

import { Collapse, TextField } from "@mui/material";

const LargeCollapse = () => {
  const shelfContext = useContext(ShelfContext);

  return (
    <Collapse in={shelfContext.filterExpanded} timeout="auto" unmountOnExit>
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
    </Collapse>
  );
};

export default LargeCollapse;
