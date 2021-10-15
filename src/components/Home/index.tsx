import { Container, Stack, Box } from "@mui/material";
import Shelf from "./Shelf";

const Home = (props: any) => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: "48px", marginBottom: 2 }} />
      <Stack direction="column" spacing={2}>
        <Shelf title="Currently Reading" isMobile={props.isMobile} />
        <Shelf title="Want to Read" isMobile={props.isMobile} />
        <Shelf title="Read" isMobile={props.isMobile} />
      </Stack>
    </Container>
  );
};

export default Home;
