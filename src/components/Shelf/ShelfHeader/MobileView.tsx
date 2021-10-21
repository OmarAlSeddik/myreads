import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MobileView = (props: any) => {
  return (
    <IconButton size="small" color="primary" onClick={props.handleMobileExpand}>
      <MenuIcon />
    </IconButton>
  );
};

export default MobileView;
