import Searchbar from "../components/Searchbar";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";
import * as API from "../utils/API";

export default function Search(query) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(films);
  }, [films]);

  return (
    <>
      <Searchbar />
      {films && <Movies films={films} />}
    </>
  );
}
