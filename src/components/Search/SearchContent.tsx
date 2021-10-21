import { Container, Stack } from "@mui/material";

const SearchContent = (props: any) => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          overflowX: { xs: "auto" },
          flexWrap: { lg: "wrap" },
        }}
      >
        {props.displayedResults}
      </Stack>
    </Container>
  );
};

export default SearchContent;
