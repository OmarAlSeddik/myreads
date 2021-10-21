import { Stack } from "@mui/material";
import escapeStringRegexp from "escape-string-regexp";
import Book from "../Book";

const ShelfBody = (props: any) => {
  const match = new RegExp(escapeStringRegexp(props.filterQuery), "i");

  return (
    <Stack
      direction="row"
      sx={{ overflowX: { xs: "auto" }, flexWrap: { lg: "wrap" } }}
    >
      {props.books
        .filter(
          (book: any) => match.test(book.title) || match.test(book.authors)
        )
        .map((book: any) => (
          <Book book={book} moveBook={props.moveBook} key={book.id} />
        ))}
    </Stack>
  );
};

export default ShelfBody;
