import { AppBar, Toolbar, Stack } from "@mui/material";

import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";
import Title from "./Title";

const Header = (props: any) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ width: "90%", alignSelf: "center" }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Title />
          <SearchBar isMobile={props.isMobile} />
          <ThemeButton
            themeMode={props.themeMode}
            toggleTheme={props.toggleTheme}
            isMobile={props.isMobile}
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
