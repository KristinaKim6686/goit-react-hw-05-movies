import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Header, Form, Input, Button } from "./Searchbar.styled";
import { useState } from "react";
import { toast } from "react-toastify";
import * as API from "../../utils/API";
import { Outlet } from "react-router-dom";
import Movies from "../Movies/Movies";

function Searchbar() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const searchMovies = () => {
    return API.fetchSearch(query)
      .then((response) => [...response.results])
      .then(setMovies)
      .catch(handleError);
  };
  const handleError = () => {
    return toast.error("Oh my gach!! There is nothing here!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMovies([]);
    if (query.trim() === "") {
      return toast.error("Try to enter something");
    }
    // handleFormSubmit(query);
    if (query !== "") {
      searchMovies(query);
    }
    setQuery("");
  };

  return (
    <>
      <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit">Search</Button>
          <Input
            query={query}
            type="text"
            autocomplete="off"
            autoFocus
            value={query}
            placeholder="Search images and photos"
            onChange={handleInputChange}
          />
        </Form>
        <ToastContainer autoClose={2000} />
      </Header>
      <Movies films={movies} />
      <Outlet />
    </>
  );
}
export default Searchbar;
