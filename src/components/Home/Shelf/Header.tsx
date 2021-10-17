import {
  Stack,
  IconButton,
  ButtonGroup,
  Button,
  Typography,
  Divider,
  Collapse,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props: any) => {
  const mobileView = (
    <IconButton size="small" color="primary" onClick={props.handleMobileExpand}>
      <MenuIcon />
    </IconButton>
  );

  const largeView = (
    <ButtonGroup
      variant="text"
      size="small"
      sx={{
        ".MuiButtonGroup-grouped": {
          borderRadius: "1rem 1rem 0 0",
          textTransform: "capitalize",
        },
      }}
    >
      <Button startIcon={<SearchIcon />} onClick={props.handleFilterExpand}>
        Filter
      </Button>
      <Button startIcon={<SelectAllIcon />}>Select</Button>
      <Button
        startIcon={<ClearIcon />}
        color="error"
        onClick={() =>
          props.moveBooks(
            props.books.filter((book: any) => book.shelf === `${props.value}`),
            "read"
          )
        }
      >
        Clear
      </Button>
    </ButtonGroup>
  );

  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4" component="h2" fontFamily="Italiano">
          {props.title}
        </Typography>
        {props.isMobile ? mobileView : largeView}
      </Stack>
      <Divider />
      <Collapse in={props.filterExpanded} timeout="auto" unmountOnExit>
        <TextField
          placeholder="Filter"
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
      </Collapse>
      <Collapse in={props.mobileExpanded} timeout="auto" unmountOnExit>
        <Stack direction="row">
          <TextField
            placeholder="Filter"
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
          <ButtonGroup
            variant="text"
            size="small"
            sx={{
              ".MuiButtonGroup-grouped": {
                textTransform: "capitalize",
              },
            }}
          >
            <Button startIcon={<SelectAllIcon />}>Select</Button>
            <Button
              startIcon={<ClearIcon />}
              color="error"
              onClick={() =>
                props.moveBooks(
                  props.books.filter(
                    (book: any) => book.shelf === `${props.value}`
                  ),
                  "read"
                )
              }
            >
              Clear
            </Button>
          </ButtonGroup>
        </Stack>
        <Divider />
      </Collapse>
    </Stack>
  );
};

export default Header;
