import { Grid, Box, Typography } from "@mui/material";

const Book = (props: any) => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item container direction="column" alignItems="center">
        <Grid
          item
          sx={{
            width: "8rem",
            height: "12.0625rem",
            backgroundImage:
              'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
          }}
        />
        <div className="book-shelf-changer">
          <select>
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </Grid>
      <Grid item>
        <Typography>{props.title}</Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.author}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Book;
