import { useContext } from "react";
import AppContext from "../../store/AppContext";
import ShelfContext from "../../store/ShelfContext";

import { Grid } from "@mui/material";

import Book from "../Book";

const ShelfBody = (props: any) => {
  const context = useContext(AppContext);
  const shelfContext = useContext(ShelfContext);

  return (
    <Grid
      container
      direction="row"
      columns={18}
      wrap="nowrap"
      sx={{ overflowX: { xs: "auto" }, flexWrap: { lg: "wrap" } }}
    >
      {props.books
        .filter(
          (book: any) =>
            shelfContext.match.test(book.title) ||
            shelfContext.match.test(book.authors)
        )
        .map((book: any) => (
          <Book
            book={book}
            moveBook={context.moveBook}
            selectionMode={shelfContext.selectionMode}
            selected={
              shelfContext.selectedBooks.filter(
                (currentBook: any) => currentBook.id === book.id
              ).length > 0
            }
            selectBook={shelfContext.selectBook}
            deselectBook={shelfContext.deselectBook}
            key={book.id}
          />
        ))}
    </Grid>
  );
};

export default ShelfBody;
