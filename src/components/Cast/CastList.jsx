import { CastList, ListItem, Actor, Name, Role } from "./Cast.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../utils/API";

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return API.fetchCast(movieId).then((response) => setCast(response.cast));
  }, [movieId]);

  return (
    <CastList>
      {cast &&
        cast.map(({ profile_path, name, id, character }) => (
          <ListItem key={id}>
            <Actor src={`https://image.tmdb.org/t/p/w500${profile_path}`} />
            <Name>{name}</Name>
            <Role>{character}</Role>
          </ListItem>
        ))}
    </CastList>
  );
}
