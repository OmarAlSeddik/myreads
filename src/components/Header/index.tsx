import { AppBar, Stack } from "@mui/material";

import Title from "./Title";
import Navigation from "./Navigation";
import ThemeButton from "./ThemeButton";

const Header = () => {
  return (
    <AppBar
      color="default"
      position="fixed"
      sx={{
        alignItems: "center",
        width: "100vw",
        left: 0,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: "90%" }}
      >
        <Title />
        <Navigation />
        <ThemeButton />
      </Stack>
    </AppBar>
  );
};

export default Header;
