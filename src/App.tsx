import { createTheme, ThemeProvider } from "@mui/material";
import { lightBlue, red } from "@mui/material/colors";
import Home from "./pages/Home";

const App = () => {
  const theme = createTheme({
    palette: { primary: lightBlue, secondary: red },
  });

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
