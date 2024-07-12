import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ABOUT_HOOKS,
  ABOUT_LIFE_CYCLE_METHOD,
  ABOUT_PERFORMANCE,
  ABOUT_PURE_COMP,
  ABOUT_PURE_FUNCTION,
  ABOUT_REACT,
  ABOUT_REDUX,
  ABOUT_TESTING,
  ABOUT_TYPE_SCRIPT,
} from "./Routers/RouteEndpoints";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <NavLink to={ABOUT_REACT} style={{ padding: "20px" }}>
        About React
      </NavLink>
      <NavLink to={ABOUT_LIFE_CYCLE_METHOD} style={{ padding: "20px" }}>
        React Lifecycle Methods
      </NavLink>
      <NavLink to={ABOUT_HOOKS} style={{ padding: "20px" }}>
        React Hooks
      </NavLink>
      <NavLink to={ABOUT_PERFORMANCE} style={{ padding: "20px" }}>
        About performance
      </NavLink>
      <NavLink to={ABOUT_PURE_COMP} style={{ padding: "20px" }}>
        About Pure Components and Impure Components
      </NavLink>
      <NavLink to={ABOUT_TYPE_SCRIPT} style={{ padding: "20px" }}>
        About TypeScript
      </NavLink>
      <h2>Redux</h2>
      <Link to={ABOUT_REDUX} style={{ padding: "20px" }}>
        About Redux
      </Link>
      <br />
      <Link to={ABOUT_PURE_FUNCTION} style={{ padding: "20px" }}>
        About Pure Function
      </Link>
      <br />
      <Link to={ABOUT_TESTING} style={{ padding: "20px" }}>
        About Testing
      </Link>
    </div>
  );
};

export default Home;
