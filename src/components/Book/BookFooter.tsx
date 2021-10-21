import { Grid, Typography } from "@mui/material";

const BookFooter = (props: any) => {
  return (
    <>
      <Grid item>
        <Typography align="center">{props.book.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" align="center" color="text.secondary">
          {props.book.authors}
        </Typography>
      </Grid>
    </>
  );
};

export default BookFooter;
