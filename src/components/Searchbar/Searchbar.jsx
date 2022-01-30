import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Header, Form, Input, Button } from "./Searchbar.styled";
import { useState } from "react";
import { toast } from "react-toastify";
import * as API from "../../utils/API";
import { Outlet } from "react-router-dom";

function Searchbar() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const searchMovies = () => {
    return API.fetchSearch(query)
      .then((response) => [...movies, ...response.results])
      .then(setMovies)
      .catch(handleError);
  };
  const handleError = () => {
    return toast.error("Oh my gach!! There is nothing here!");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      return toast.error("Try to enter something");
    }
    handleFormSubmit(query);
    setQuery("");
    console.log(query);
  };
  const handleFormSubmit = (query) => {
    setQuery(query);
    setMovies([]);
    if (query !== "") {
      searchMovies(query);
    }
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
      <Outlet />
    </>
  );
}
export default Searchbar;
