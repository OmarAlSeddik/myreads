import { Container, Stack, Box } from "@mui/material";
import Shelf from "../Shelf";

const Home = (props: any) => {
  const shelves = [
    { title: "Currently Reading", value: "currentlyReading" },
    { title: "Want to Read", value: "wantToRead" },
    { title: "Read", value: "read" },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "48px", marginBottom: 2 }} />
      <Stack direction="column" spacing={2}>
        {shelves.map((shelf) => (
          <Shelf
            title={shelf.title}
            value={shelf.value}
            key={shelf.value}
            isMobile={props.isMobile}
            books={props.books.filter(
              (book: any) => book.shelf === shelf.value
            )}
            setBooks={props.setBooks}
            moveBook={props.moveBook}
            moveBooks={props.moveBooks}
          />
        ))}
      </Stack>
    </Container>
  );
};

export default Home;
