import Searchbar from "../components/Searchbar";
import Movies from "../components/Movies/Movies";
import { useState, useEffect } from "react";

export default function Search() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms();
  }, [films]);

  return <>{!films ? <Searchbar /> : <Movies films={films} />}</>;

  // return (
  //   <>
  //     <Searchbar />
  //     {films && <Movies films={films} />}

  //   </>
  // );
}
