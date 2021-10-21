import { Box, TextField } from "@mui/material";

const SearchBar = (props: any) => {
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
        value={props.searchQuery}
        onChange={props.handleSearchQuery}
      />
    </Box>
  );
};

export default SearchBar;
