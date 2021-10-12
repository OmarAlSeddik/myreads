import { useState } from "react";

import {
  IconButton,
  InputBase,
  Stack,
  SwipeableDrawer,
  useMediaQuery,
  TextField,
} from "@mui/material";
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

  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);
  const toggleDrawer = () => setDrawer(!drawer);

  const mobileView = (
    <>
      <IconButton
        component={motion.button}
        variants={buttonAnimation}
        whileTap="whileTap"
        onClick={toggleDrawer}
      >
        <SearchIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="top"
        open={drawer}
        onOpen={openDrawer}
        onClose={closeDrawer}
        sx={{ zIndex: 1000 }}
      >
        <div style={{ height: "3.5rem" }} />
        <TextField
          placeholder="Search a Book!"
          variant="standard"
          sx={{ "& .MuiInput-input": { fontSize: "1.5rem" } }}
        ></TextField>
      </SwipeableDrawer>
    </>
  );
  const largeView = (
    <CustomSearchBar>
      <Stack direction="row" alignItems="center">
        <CustomIconContainer>
          <SearchIcon />
        </CustomIconContainer>
        <StyledInputBase placeholder="Search a Book!" />
      </Stack>
    </CustomSearchBar>
  );

  return isMobile ? mobileView : largeView;
};

export default SearchBar;
