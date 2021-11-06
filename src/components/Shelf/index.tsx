import { Stack } from "@mui/material";

import ShelfHeader from "./ShelfHeader";
import ShelfBody from "./ShelfBody";
import { ShelfContextProvider } from "../../store/ShelfContext";

const Shelf = (props: any) => {
  return (
    <ShelfContextProvider>
      <Stack>
        <ShelfHeader
          shelfTitle={props.shelfTitle}
          shelfValue={props.shelfValue}
          books={props.books}
        />
        <ShelfBody books={props.books} />
      </Stack>
    </ShelfContextProvider>
  );
};

export default Shelf;
