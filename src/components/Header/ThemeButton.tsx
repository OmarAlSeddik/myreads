import { IconButton } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { motion } from "framer-motion";

const ThemeButton = (props: any) => {
  const buttonAnimation = {
    whileTap: { scale: 1.3 },
  };

  const darkView = (
    <IconButton
      size="small"
      color="primary"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {props.isMobile ? <WbSunnyIcon /> : <WbSunnyIcon fontSize="large" />}
    </IconButton>
  );

  const lightView = (
    <IconButton
      size="small"
      color="primary"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {props.isMobile ? (
        <Brightness2Icon />
      ) : (
        <Brightness2Icon fontSize="large" />
      )}
    </IconButton>
  );

  return props.themeMode === "dark" ? darkView : lightView;
};

export default ThemeButton;
