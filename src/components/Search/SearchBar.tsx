import { Box, TextField } from "@mui/material";

const SearchBar = () => {
  return (
    <Box>
      <Box sx={{ height: "48px" }} />
      <TextField
        placeholder="Search a Book in the Library"
        variant="standard"
        size="small"
        fullWidth={true}
        sx={{
          ".MuiInput-input": {
            borderRadius: 0,
            backgroundColor: "divider",
            paddingLeft: 2,
            fontSize: "1.5rem",
          },
        }}
      />
    </Box>
  );
};

export default SearchBar;
