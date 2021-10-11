import { IconButton } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { motion } from "framer-motion";

const ThemeButton = (props: any) => {
  const buttonAnimation = { whileTap: { scale: 1.3 } };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const darkView = (
    <IconButton
      size="small"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {isMobile ? <WbSunnyIcon /> : <WbSunnyIcon fontSize="large" />}
    </IconButton>
  );

  const lightView = (
    <IconButton
      size="small"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {isMobile ? <Brightness2Icon /> : <Brightness2Icon fontSize="large" />}
    </IconButton>
  );

  return props.themeMode === "dark" ? darkView : lightView;
};

export default ThemeButton;
