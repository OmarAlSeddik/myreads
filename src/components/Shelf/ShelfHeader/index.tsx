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
        {context.isMobile ? (
          <MobileView handleMobileExpand={props.handleMobileExpand} />
        ) : (
          <LargeView
            handleFilterExpand={props.handleFilterExpand}
            toggleSelectionMode={props.toggleSelectionMode}
            handleDialogOpen={props.handleDialogOpen}
          />
        )}
      </Stack>
      <Divider />
      {context.isMobile ? (
        <MobileCollapse
          mobileExpanded={props.mobileExpanded}
          filterQuery={props.filterQuery}
          handleFilter={props.handleFilter}
          toggleSelectionMode={props.toggleSelectionMode}
          handleDialogOpen={props.handleDialogOpen}
        />
      ) : (
        <LargeCollapse
          filterExpanded={props.filterExpanded}
          filterQuery={props.filterQuery}
          handleFilter={props.handleFilter}
        />
      )}
      <SelectionCollapse
        books={props.books}
        filterQuery={props.filterQuery}
        selectionMode={props.selectionMode}
        selectedBooks={props.selectedBooks}
        selectAll={props.selectAll}
        deselectAll={props.deselectAll}
        shelfValue={props.shelfValue}
        match={props.match}
      />
      <AlertDialog
        books={props.books}
        dialog={props.dialog}
        handleDialogClose={props.handleDialogClose}
        shelfValue={props.shelfValue}
      />
    </Stack>
  );
};

export default ShelfToolbar;
