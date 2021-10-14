import { Box, TextField } from "@mui/material";

const Search = () => {
  return (
    <Box>
      <Box sx={{ height: "48px" }} />
      <TextField
        placeholder="Search a Book in the Library!"
        variant="standard"
        size="small"
        fullWidth={true}
        sx={{
          "& .MuiInput-input": {
            backgroundColor: "divider",
            paddingLeft: 2,
            fontSize: "1.5rem",
          },
        }}
      />
    </Box>
  );
};

export default Search;
