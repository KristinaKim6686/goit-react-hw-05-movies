import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Search from "./pages/Search";
import Trending from "./pages/Trending";
import Details from "./pages/Details";

const NotFound = () => {
  return <h1>NotFound</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Trending />} />
        <Route path="movies" element={<Search />}>
          <Route path=":movieId/*" element={<Details />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
