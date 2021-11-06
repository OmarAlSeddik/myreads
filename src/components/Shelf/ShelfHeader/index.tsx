import { useContext } from "react";
import AppContext from "../../../store/AppContext";

import { Stack, Typography, Divider } from "@mui/material";

import MobileView from "./MobileView";
import LargeView from "./LargeView";
import MobileCollapse from "./MobileCollapse";
import LargeCollapse from "./LargeCollapse";
import SelectionCollapse from "./SelectionCollapse";
import AlertDialog from "./AlertDialog";

const ShelfToolbar = (props: any) => {
  const context = useContext(AppContext);

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h4"
          component="h2"
          fontFamily="Italiano"
          color="primary"
        >
          {props.shelfTitle}
        </Typography>
        {context.isMobile ? <MobileView /> : <LargeView />}
      </Stack>
      <Divider />
      {context.isMobile ? <MobileCollapse /> : <LargeCollapse />}
      <SelectionCollapse books={props.books} shelfValue={props.shelfValue} />
      <AlertDialog books={props.books} />
    </Stack>
  );
};

export default ShelfToolbar;
