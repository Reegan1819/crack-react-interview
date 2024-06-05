import React from "react";
import { NavLink } from "react-router-dom";
import {
  ABOUT_USE_CONTEXT,
  ABOUT_USE_EFFECT,
  ABOUT_USE_REDUCER,
  ABOUT_USE_STATE,
} from "../../Routers/RouteEndpoints";

const AboutHooks = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>What are React Hooks?</h1>
      <p>
        React Hooks are functions that let you use state and other React
        features in functional components. They allow you to use state and other
        React features without writing a class.
      </p>
      <NavLink to={ABOUT_USE_STATE} style={{ padding: "20px" }}>
        useState Hook
      </NavLink>
      <NavLink to={ABOUT_USE_EFFECT} style={{ padding: "20px" }}>
        useEffect Hook
      </NavLink>
      <NavLink to={ABOUT_USE_REDUCER} style={{ padding: "20px" }}>
        useReducer Hook
      </NavLink>
      <NavLink to={ABOUT_USE_CONTEXT} style={{ padding: "20px" }}>
        useContext Hook
      </NavLink>
    </div>
  );
};

export default AboutHooks;
