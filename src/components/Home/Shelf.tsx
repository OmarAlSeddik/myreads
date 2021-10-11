import { Divider, Stack, Box, Typography } from "@mui/material";
import Book from "./Book";

const Shelf = (props: any) => {
  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Divider />
      </Box>
      <Stack
        justifyContent="space-around"
        direction={{ xs: "column", sm: "row" }}
      >
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
      </Stack>
    </Stack>
  );
};

export default Shelf;
