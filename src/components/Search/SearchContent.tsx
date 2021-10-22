import { Grid } from "@mui/material";

const SearchContent = (props: any) => {
  return (
    <Grid
      container
      direction="row"
      columns={18}
      wrap="nowrap"
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        overflowX: { xs: "auto" },
        flexWrap: { lg: "wrap" },
      }}
    >
      {props.displayedResults}
    </Grid>
  );
};

export default SearchContent;
