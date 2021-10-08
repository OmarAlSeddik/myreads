import { AppBar, Toolbar, Typography, Grid, IconButton } from "@mui/material";
import ThemeButton from "./ThemeButton";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={2}>
            <Typography variant="h3" component="h1" align="center">
              My Reads
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <SearchBar />
          </Grid>
          <Grid item xs={1}>
            <ThemeButton />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
