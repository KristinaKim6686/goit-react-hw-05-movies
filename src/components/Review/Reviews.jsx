import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../utils/API";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    return API.fetchReviews(movieId).then((response) =>
      setReviews(response.cast)
    );
  }, [movieId]);
  return <div>Lol</div>;
}
