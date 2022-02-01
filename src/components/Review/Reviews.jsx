import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../utils/API";
import { List, Item, Author, Content } from "./Reviews.styled";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return API.fetchReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map((results) => (
          <Item key={results.id}>
            <Author>{results.author}</Author>
            <Content>{results.content}</Content>
          </Item>
        ))
      ) : (
        <>No reviews for this moovie</>
      )}
    </List>
  );
}
