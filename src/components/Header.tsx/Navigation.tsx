import { Link as RouterLink } from "react-router-dom";

import { Tabs, Tab } from "@mui/material";

const Navigation = (props: any) => {
  return (
    <Tabs
      value={props.pageValue}
      onChange={props.handlePageChange}
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
      <Tab disableRipple label="home" component={RouterLink} to="/" />
      <Tab disableRipple label="search" component={RouterLink} to="/search" />
    </Tabs>
  );
};

export default Navigation;
