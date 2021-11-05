/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useContext } from "react";
import AppContext from "../../store/AppContext";

import { Stack } from "@mui/material";

import useStickyState from "../../hooks/useStickyState";
import SearchBar from "./SearchBar";
import Book from "../Book";
import { search } from "../../BooksAPI";
import useDebounce from "../../hooks/useDebounce";
import SearchContent from "./SearchContent";
import Footer from "../Footer";

const Search = () => {
  const context = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useStickyState("", "searchQuery");
  const debouncedSearchQuery = useDebounce(searchQuery);
  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const [searchResults, setSearchResults] = useStickyState(
    [] as any,
    "searchResults"
  );

  useEffect(() => {
    let toggle = true;
    debouncedSearchQuery &&
      search(debouncedSearchQuery).then((data) => {
        if (data.error) setSearchResults([]);
        else if (toggle) {
          setSearchResults(data);
        }
      });

    return () => {
      toggle = false;
      setSearchResults([]);
    };
  }, [debouncedSearchQuery]);

  const displayedResults = searchResults
    .filter((book: any) => book.hasOwnProperty("imageLinks"))
    .map((book: any) =>
      context.bookIdMap.has(book.id) ? context.bookIdMap.get(book.id) : book
    )
    .map((book: any) => (
      <Book book={book} moveBook={context.moveBook} key={book.id} />
    ));

  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <Stack sx={{ flex: "1 0 auto" }}>
        <SearchBar
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
        />
        <SearchContent displayedResults={displayedResults} />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default Search;
