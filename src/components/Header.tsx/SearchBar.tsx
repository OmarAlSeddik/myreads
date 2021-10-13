import { useState } from "react";

import {
  IconButton,
  InputBase,
  Stack,
  SwipeableDrawer,
  TextField,
  Box,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import { motion } from "framer-motion";

const SearchBar = (props: any) => {
  const buttonAnimation = { whileTap: { scale: 1.3 } };

  const [drawer, setDrawer] = useState(false);
  const openDrawer = () => setDrawer(true);
  const closeDrawer = () => setDrawer(false);
  const toggleDrawer = () => setDrawer(!drawer);

  const mobileView = (
    <Box>
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
        <Box sx={{ marginTop: (theme) => theme.mixins.toolbar }} />
        <TextField
          placeholder="Search a Book!"
          variant="standard"
          sx={{ "& .MuiInput-input": { paddingLeft: 1, fontSize: "1.5rem" } }}
        />
      </SwipeableDrawer>
    </Box>
  );

  const CustomSearchBar = styled("div")(({ theme }) => ({
    display: "flex",
    color: "inherit",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.3),
    },
  }));

  const CustomIconContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1),
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "30rem",
    transition: theme.transitions.create(["width"]),
    "&:focus-within": {
      width: "45rem",
    },
  }));

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

  return props.isMobile ? mobileView : largeView;
};

export default SearchBar;
