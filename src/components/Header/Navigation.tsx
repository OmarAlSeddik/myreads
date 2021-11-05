import { useContext } from "react";
import AppContext from "../../store/AppContext";

import { Link as RouterLink } from "react-router-dom";

import { Tabs, Tab } from "@mui/material";

const Navigation = () => {
  const context = useContext(AppContext);

  return (
    <Tabs
      value={context.pageValue}
      onChange={context.handlePageChange}
      indicatorColor="primary"
      textColor="primary"
      variant="fullWidth"
      sx={{
        ".MuiTabs-indicator": {
          padding: 0.3,
          borderRadius: "1rem 1rem 0 0",
        },
      }}
    >
      <Tab
        disableRipple
        label="Home"
        component={RouterLink}
        to="/"
        sx={{
          textTransform: "capitalize",
          fontSize: "1rem",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Tab
        disableRipple
        label="Search"
        component={RouterLink}
        to="/search"
        sx={{
          textTransform: "capitalize",
          fontSize: "1rem",
          "&:hover": { color: "primary.main" },
        }}
      />
    </Tabs>
  );
};

export default Navigation;
