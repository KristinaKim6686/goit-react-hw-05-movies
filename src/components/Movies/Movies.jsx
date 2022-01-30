import { useLocation } from "react-router-dom";
import { MovieList, ListItem, Movie, Title } from "./Movies.styled";
import { Link } from "react-router-dom";

export default function Movies({ films }) {
  const location = useLocation();

  return (
    <>
      <MovieList>
        {films &&
          films.map(({ id, title, poster_path }) => (
            <Link to={`movies/${id}`} state={{ from: location }} key={id}>
              <ListItem key={id}>
                <Movie
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                />
                <Title>{title}</Title>
              </ListItem>
            </Link>
          ))}
      </MovieList>
    </>
  );
}
