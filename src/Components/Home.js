import React from "react";
import { NavLink } from "react-router-dom";
import { ABOUT_REACT } from "./Routers/RouteEndpoints";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <NavLink to={ABOUT_REACT} style={{ padding: "20px" }}>
        About React
      </NavLink>
    </div>
  );
};

export default Home;
