import { AppBar, Toolbar, Typography, Grid, IconButton } from "@mui/material";
import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";

const Header = (props: any) => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={3}>
            <Typography
              variant="h3"
              component="h1"
              align="center"
              sx={{ fontFamily: "Italiano" }}
            >
              MyReads
            </Typography>
          </Grid>
          <Grid container item justifyContent="center" xs={6}>
            <Grid item>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid item xs={1} sx={{ marginLeft: "auto" }}>
            <ThemeButton
              themeMode={props.themeMode}
              toggleTheme={props.toggleTheme}
            />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
