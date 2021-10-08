import { IconButton, InputBase, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <Grid container alignItems="center">
      <SearchIcon />
      <InputBase />
    </Grid>
  );
};

export default SearchButton;
