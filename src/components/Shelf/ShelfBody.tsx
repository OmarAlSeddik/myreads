import { Grid } from "@mui/material";
import Book from "../Book";

const ShelfBody = (props: any) => {
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
            props.match.test(book.title) || props.match.test(book.authors)
        )
        .map((book: any) => (
          <Book
            book={book}
            moveBook={props.moveBook}
            selectionMode={props.selectionMode}
            selected={
              props.selectedBooks.filter(
                (currentBook: any) => currentBook.id === book.id
              ).length > 0
            }
            selectBook={props.selectBook}
            deselectBook={props.deselectBook}
            key={book.id}
          />
        ))}
    </Grid>
  );
};

export default ShelfBody;
