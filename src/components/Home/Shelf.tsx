import { Divider, Grid, Typography } from "@mui/material";
import Book from "./Book";

const Shelf = (props: any) => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Typography variant="h5" component="h2">
          {props.title}
        </Typography>
        <Divider />
      </Grid>
      <Grid item container justifyContent="space-between">
        <Grid item xs={2}>
          <Book title="To Kill a Mockingbird" author="Harper Lee" />
        </Grid>
        <Grid item xs={2}>
          <Book title="To Kill a Mockingbird" author="Harper Lee" />
        </Grid>
        <Grid item xs={2}>
          <Book title="To Kill a Mockingbird" author="Harper Lee" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Shelf;
