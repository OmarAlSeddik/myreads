import { Typography, useMediaQuery, useTheme } from "@mui/material";

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mobileView = (
    <Typography
      variant="h5"
      component="h1"
      align="center"
      sx={{ fontFamily: "Italiano" }}
    >
      MyReads
    </Typography>
  );

  const largeView = (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      sx={{ fontFamily: "Italiano" }}
    >
      MyReads
    </Typography>
  );

  return isMobile ? mobileView : largeView;
};

export default Title;
