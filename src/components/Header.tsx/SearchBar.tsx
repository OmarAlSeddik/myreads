import { IconButton, InputBase, Stack, useMediaQuery } from "@mui/material";
import { styled, alpha, useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { motion } from "framer-motion";

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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonAnimation = { whileTap: { scale: 1.3 } };

  const mobileView = (
    <IconButton
      component={motion.button}
      variants={buttonAnimation}
      whileTap="whileTap"
    >
      <SearchIcon />
    </IconButton>
  );
  const largeView = (
    <CustomSearchBar>
      <Stack direction="row" alignItems="center">
        <CustomIconContainer>
          <SearchIcon />
        </CustomIconContainer>
        <StyledInputBase placeholder="Search a Book!"></StyledInputBase>
      </Stack>
    </CustomSearchBar>
  );

  return isMobile ? mobileView : largeView;
};

export default SearchBar;
