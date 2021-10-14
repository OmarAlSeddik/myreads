import { Divider, Stack, Grid, Box, Typography } from "@mui/material";
import Book from "./Book";

const Shelf = (props: any) => {
  return (
    <Stack direction="column" spacing={2}>
      <Box>
        <Typography variant="h4" component="h2" fontFamily="Italiano">
          {props.title}
        </Typography>
        <Divider />
      </Box>
      <Grid container>
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
        <Book title="To Kill a Mockingbird" author="Harper Lee" />
      </Grid>
    </Stack>
  );
};

export default Shelf;
