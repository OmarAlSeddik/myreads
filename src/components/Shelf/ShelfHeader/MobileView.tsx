import { useContext } from "react";
import ShelfContext from "../../../store/ShelfContext";

import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobileView = () => {
  const shelfContext = useContext(ShelfContext);

  return (
    <IconButton
      size="small"
      color="primary"
      onClick={shelfContext.handleMobileExpand}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MobileView;
