import { useEffect, useState } from "react";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { useParams } from "react-router-dom";
import * as API from "../utils/API";

export default function Details(film) {
  const [movie, setMovie] = useState([null]);
  const { movieId } = useParams();
  useEffect(() => {
    return API.fetchDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <MovieDetails movie={movie} />
    </>
  );
}
