import Searchbar from "../components/Searchbar";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";

export default function Search() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms();
  }, [films]);

  // return <>{!films ? <Movies films={films} /> : <Searchbar />}</>;

  return (
    <>
      <Searchbar />
      {films && <Movies films={films} />}
    </>
  );
}
