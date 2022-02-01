import Searchbar from "../components/Searchbar";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";

export default function Search(movieId) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms();
  }, [films]);

  // return <>{!films <Searchbar />:<Movies films={films} />}</>;

  return (
    <>
      <Searchbar />
      {films && <Movies films={films} />}
    </>
  );
}
