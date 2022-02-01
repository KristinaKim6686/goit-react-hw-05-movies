import { NavLink, Outlet, Routes, Route, useNavigate } from "react-router-dom";
import {
  MovieThumb,
  Movie,
  Title,
  GenresList,
  Genre,
  Rate,
  Overview,
  Runtime,
} from "./MovieDetails.styled";
import { Button } from "../Searchbar/Searchbar.styled";

export default function MovieDetails({ movie }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate("/movies");
  }
  return (
    <>
      <Button onClick={handleClick}>go home</Button>
      <MovieThumb>
        <Movie
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <Title>{movie.title}</Title>
        <GenresList>
          {movie.genres &&
            movie.genres.map((genre) => (
              <Genre key={genre.id}>{genre.name}</Genre>
            ))}
        </GenresList>
        <Rate>Rate: {movie.vote_average}</Rate>
        <Runtime>Runtime: {movie.runtime}</Runtime>
        <Overview>{movie.overview}</Overview>
        <NavLink
          to={`cast`}
          activeStyle={{ color: "red" }}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Cast
        </NavLink>
        <NavLink
          to={`reviews`}
          activeStyle={{ color: "red" }}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Reviews
        </NavLink>
      </MovieThumb>
      <hr />

      <Outlet />
    </>
  );
}
