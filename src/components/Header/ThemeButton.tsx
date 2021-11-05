import { useContext } from "react";
import AppContext from "../../store/AppContext";

import { IconButton } from "@mui/material";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import { motion } from "framer-motion";

const ThemeButton = () => {
  const buttonAnimation = {
    whileTap: { scale: 1.3 },
  };

  const context = useContext(AppContext);

  const darkView = (
    <IconButton
      size="small"
      color="primary"
      onClick={context.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {context.isMobile ? <WbSunnyIcon /> : <WbSunnyIcon fontSize="large" />}
    </IconButton>
  );

  const lightView = (
    <IconButton
      size="small"
      color="primary"
      onClick={context.toggleTheme}
      component={motion.button}
      variants={buttonAnimation}
      whileTap={"whileTap"}
    >
      {context.isMobile ? (
        <Brightness2Icon />
      ) : (
        <Brightness2Icon fontSize="large" />
      )}
    </IconButton>
  );

  return context.themeMode === "dark" ? darkView : lightView;
};

export default ThemeButton;
