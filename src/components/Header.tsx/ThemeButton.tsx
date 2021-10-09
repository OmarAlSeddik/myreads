import { IconButton } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { motion } from "framer-motion";

const ThemeButton = (props: any) => {
  const buttonAnimation = { whileTap: { scale: 1.3 } };

  return props.themeMode === "dark" ? (
    <IconButton
      size="small"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      <WbSunnyIcon fontSize="large" />
    </IconButton>
  ) : (
    <IconButton
      size="small"
      onClick={props.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      <Brightness2Icon fontSize="large" />
    </IconButton>
  );
};

export default ThemeButton;
