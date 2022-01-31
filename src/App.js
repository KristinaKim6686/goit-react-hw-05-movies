import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Details from "./pages/Details";
import Cast from "./components/Cast/CastList";
import Reviews from "./components/Review/Reviews";

const NotFound = () => {
  return <h1>NotFound</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Trending />} />
        <Route path="movies" element={<Search />}>
          <Route path=":movieId" element={<Details />}>
            <Route path=":reviews" element={<Reviews />} />
            <Route path=":cast" index element={<Cast />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
