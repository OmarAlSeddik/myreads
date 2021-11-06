import { useContext } from "react";
import AppContext from "../../store/AppContext";

import { Stack, Box } from "@mui/material";
import Shelf from "../Shelf";
import Footer from "../Footer";

const Home = () => {
  const context = useContext(AppContext);

  const shelves = [
    { title: "Currently Reading", value: "currentlyReading" },
    { title: "Want to Read", value: "wantToRead" },
    { title: "Read", value: "read" },
  ];

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Stack
        sx={{
          width: "95%",
          marginLeft: "auto",
          marginRight: "auto",
          flex: "1 0 auto",
        }}
      >
        <Box sx={{ height: "48px", marginBottom: 2 }} />
        <Stack direction="column" spacing={2}>
          {shelves.map((shelf) => (
            <Shelf
              shelfTitle={shelf.title}
              shelfValue={shelf.value}
              key={shelf.value}
              books={context.books.filter(
                (book: any) => book.shelf === shelf.value
              )}
            />
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Home;
