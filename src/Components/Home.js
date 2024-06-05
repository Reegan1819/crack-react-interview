import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_HOOKS, ABOUT_LIFE_CYCLE_METHOD, ABOUT_REACT } from "./Routers/RouteEndpoints";

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
    </div>
  );
};

export default Home;
