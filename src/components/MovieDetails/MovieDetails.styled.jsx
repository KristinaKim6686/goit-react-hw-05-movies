import styled from "styled-components";

export const MovieThumb = styled.div`
  margin-top: 20px;
`;

export const Movie = styled.img`
  width: 100%;
  max-width: 80vw;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
export const Title = styled.h3``;
export const GenresList = styled.ul`
  list-style: none;
`;
export const Wraper = styled.div`
  display: inline-block;
  padding: 15px;
`;

export const Rate = styled.p``;
export const Overview = styled.p``;
export const Runtime = styled.p``;
export const Genre = styled.li``;
