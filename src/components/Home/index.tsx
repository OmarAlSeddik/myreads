import { Container, Grid, Box } from "@mui/material";
import Shelf from "./Shelf";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ margin: 2 }} />
      <Grid container direction="column" spacing={3}>
        <Grid item>
          <Shelf title="Currently Reading" />
        </Grid>
        <Grid item>
          <Shelf title="Want to Read" />
        </Grid>
        <Grid item>
          <Shelf title="Read" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
