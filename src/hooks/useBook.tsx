import { useState, useEffect } from "react";
import { getAll } from "../BooksAPI";

const useBook = (defaultValue: any) => {
  const [books, setBooks] = useState(defaultValue);
  const [bookIdMap, setBookIdMap] = useState(new Map());

  const createMap = (books: any) => {
    const map = new Map();
    books.map((book: any) => map.set(book.id, book));
    return map;
  };

  useEffect(() => {
    getAll().then((data) => {
      setBooks(data);
      setBookIdMap(createMap(data));
    });
  }, []);

  return [books, setBooks, bookIdMap];
};

export default useBook;
