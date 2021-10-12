import React, { useState } from "react";

import {
  Stack,
  Box,
  Typography,
  ButtonBase,
  Menu,
  MenuItem,
} from "@mui/material";

const Book = (props: any) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = anchorEl ? true : false;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction="column" alignItems="center">
      <Stack direction="column" alignItems="center">
        <ButtonBase onClick={handleClick}>
          <Box
            sx={{
              width: { xs: "8rem", sm: "8rem" },
              height: { xs: "12rem", sm: "12rem" },
              backgroundImage:
                'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
            }}
          />
        </ButtonBase>

        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          open={open}
          onClose={handleClose}
          sx={{
            ".MuiMenu-list": {
              padding: 0,
            },
          }}
        >
          <MenuItem divider onClick={handleClose} value="move">
            Move to...
          </MenuItem>
          <MenuItem divider onClick={handleClose} value="currentlyReading">
            Currently Reading
          </MenuItem>
          <MenuItem divider onClick={handleClose} value="wantToRead">
            Want to Read
          </MenuItem>
          <MenuItem divider onClick={handleClose} value="read">
            Read
          </MenuItem>
          <MenuItem onClick={handleClose} value="none">
            None
          </MenuItem>
        </Menu>
      </Stack>
      <Typography>{props.title}</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {props.author}
      </Typography>
    </Stack>
  );
};

export default Book;
