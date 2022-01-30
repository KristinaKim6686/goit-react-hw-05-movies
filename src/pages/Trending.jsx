import { useState, useEffect } from "react";
import * as API from "../utils/API";
import Movies from "../components/Movies/Movies";

export default function Trending() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    return API.fetchTrending()
      .then((response) => [...films, ...response.results])
      .then(setFilms);
  }, []);
  return <>{films && <Movies films={films} />} </>;
}
