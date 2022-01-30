import { NavLink, Outlet } from "react-router-dom";
import { Heading, Nav } from "./Layout.styled";

export const Layout = () => {
  return (
    <Heading>
      <Nav>
        <NavLink
          to="/"
          activeStyle={{ color: "red" }}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Trending movies
        </NavLink>
        <NavLink
          to="/movies"
          activeStyle={{ color: "red" }}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Movies
        </NavLink>
      </Nav>
      <Outlet />
    </Heading>
  );
};
