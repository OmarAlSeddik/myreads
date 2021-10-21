import { Grid, ButtonBase, Box } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxTwoToneIcon from "@mui/icons-material/CheckBoxTwoTone";

const BookBody = (props: any) => {
  return (
    <Grid item>
      <ButtonBase
        onClick={
          props.selectionMode ? props.selectBook(props.book) : props.handleClick
        }
      >
        {props.selectionMode && (
          <CheckBoxTwoToneIcon
            sx={{
              position: "absolute",
              top: 5,
              left: 5,
              borderRadius: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          />
        )}
        {props.selectionMode && (
          <CheckBoxOutlineBlankIcon
            sx={{
              position: "absolute",
              top: 5,
              left: 5,
              borderRadius: 1,
              backgroundColor: "black",
              color: "primary.main",
            }}
          />
        )}
        <Box
          sx={{
            width: "8rem",
            height: "12rem",
            backgroundSize: "cover",
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`,
          }}
        />
      </ButtonBase>
    </Grid>
  );
};

export default BookBody;
