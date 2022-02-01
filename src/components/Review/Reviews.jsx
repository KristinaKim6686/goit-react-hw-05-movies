import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../utils/API";
import { List, Item, Author, Content } from "./Reviews.styled";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return API.fetchReviews(movieId).then((response) =>
      setReviews(...response.results)
    );
  }, []);

  return (
    <List>
      {reviews &&
        reviews.map(({ id, author, content }) => (
          <Item key={id}>
            <Author>{author}</Author>
            <Content>{content}</Content>
          </Item>
        ))}
    </List>
  );
}
