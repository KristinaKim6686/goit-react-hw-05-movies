import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { lazy, Suspense } from "react";
import Trending from "./pages/Trending";

const Search = lazy(() => import("./pages/Search"));
const Details = lazy(() => import("./pages/Details"));
const Cast = lazy(() => import("./components/Cast"));
const Reviews = lazy(() => import("./components/Review"));

const NotFound = () => {
  return <h1>NotFound</h1>;
};

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Trending />} />
          <Route path="movies" element={<Search />} />
          <Route path="movies/:movieId" element={<Details />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="cast" index element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
