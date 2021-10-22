import { useState } from "react";

import {
  Paper,
  Grid,
  Typography,
  Menu,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";

const Footer = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleColorChange = (color: any) => {
    props.setThemeColor(color);
  };

  return (
    <Paper
      sx={{
        borderRadius: 0,
      }}
    >
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        sx={{
          boxShadow: "0 -2px 4px -1px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Grid item container xs={12} md={6} justifyContent="center">
          <Button
            size="small"
            variant="contained"
            sx={{ margin: 1, textTransform: "capitalize" }}
            onClick={handleClick}
          >
            Change Theme Color
          </Button>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "center",
              horizontal: "center",
            }}
            open={open}
            onClose={handleClose}
            sx={{ ".MuiMenu-list": { padding: 0 } }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleColorChange(props.colors[0]);
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <CircleIcon
                  fontSize="small"
                  sx={{ marginRight: 1, color: "#2196f3" }}
                />
                <Typography>Blue</Typography>
              </Stack>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleColorChange(props.colors[1]);
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <CircleIcon
                  fontSize="small"
                  sx={{ marginRight: 1, color: "#e91e63" }}
                />
                <Typography>Pink</Typography>
              </Stack>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleColorChange(props.colors[2]);
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <CircleIcon
                  fontSize="small"
                  sx={{ marginRight: 1, color: "#4caf50" }}
                />
                <Typography>Green</Typography>
              </Stack>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleColorChange(props.colors[3]);
              }}
            >
              <Stack direction="row" justifyContent="space-between">
                <CircleIcon
                  fontSize="small"
                  sx={{ marginRight: 1, color: "#ffc107" }}
                />
                <Typography>Amber</Typography>
              </Stack>
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item container xs={12} md={6} justifyContent="center">
          <Typography>Made with a ⌨️ by Omar Al-Seddik</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
