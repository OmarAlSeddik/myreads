import { Stack, Box, Typography } from "@mui/material";

const Book = (props: any) => {
  return (
    <Stack direction="column" alignItems="center">
      <Stack direction="column" alignItems="center">
        <Box
          sx={{
            width: { xs: "8rem", sm: "8rem" },
            height: { xs: "12rem", sm: "12rem" },
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
      </Stack>
      <Typography>{props.title}</Typography>
      <Typography variant="body2" sx={{ color: "text.secondary" }}>
        {props.author}
      </Typography>
    </Stack>
  );
};

export default Book;
