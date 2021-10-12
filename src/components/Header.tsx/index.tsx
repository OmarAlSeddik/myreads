import { AppBar, Toolbar, Stack } from "@mui/material";

import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = (props: any) => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ width: "90%", alignSelf: "center" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Title />
          <SearchBar />
          <ThemeButton
            themeMode={props.themeMode}
            toggleTheme={props.toggleTheme}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
