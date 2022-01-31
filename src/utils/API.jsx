const BASE_URL = "https://api.themoviedb.org/3";
const MY_KEY = "d0054f310a4431d49f9df27035f5c375";

async function fetchErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Something went wrong"));
}

export async function fetchTrending() {
  return fetchErrorHandling(`${BASE_URL}/trending/movie/day?api_key=${MY_KEY}`);
}

export function fetchSearch(query) {
  return fetchErrorHandling(
    `${BASE_URL}/search/movie?api_key=${MY_KEY}&query=${query}`
  );
}

export function fetchDetails(movieId) {
  return fetchErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${MY_KEY}`);
}
export function fetchCast(movieId) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${MY_KEY}`
  );
}
export function fetchReviews(movieId) {
  return fetchErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${MY_KEY}`
  );
}
