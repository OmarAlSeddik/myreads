import { Stack, Box } from "@mui/material";
import Shelf from "../Shelf";
import Footer from "./Footer";

const Home = (props: any) => {
  const shelves = [
    { title: "Currently Reading", value: "currentlyReading" },
    { title: "Want to Read", value: "wantToRead" },
    { title: "Read", value: "read" },
  ];

  return (
    <>
      <Stack
        sx={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Box sx={{ height: "48px", marginBottom: 2 }} />
        <Stack direction="column" spacing={2}>
          {shelves.map((shelf) => (
            <Shelf
              shelfTitle={shelf.title}
              shelfValue={shelf.value}
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
      </Stack>
      <Footer
        colors={props.colors}
        themeColor={props.themeColor}
        setThemeColor={props.setThemeColor}
      />
    </>
  );
};

export default Home;
