import { InputBase, Grid } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const CustomSearchBar = styled("div")(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    color: "inherit",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: "0.5rem",
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
  }));

  const CustomIconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "36ch",
    transition: theme.transitions.create(["width"]),
    "&:focus-within": {
      width: "72ch",
    },
  }));

  return (
    <CustomSearchBar>
      <Grid container alignItems="center">
        <Grid item>
          <CustomIconContainer>
            <SearchIcon />
          </CustomIconContainer>
        </Grid>
        <Grid item>
          <StyledInputBase placeholder="Search a Book!"></StyledInputBase>
        </Grid>
      </Grid>
    </CustomSearchBar>
  );
};

export default SearchBar;
