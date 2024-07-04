import React from "react";
import { NavLink } from "react-router-dom";
import {
  ABOUT_USE_CALLBACK,
  ABOUT_USE_CONTEXT,
  ABOUT_USE_CONTEXT_DISPLAY,
  ABOUT_USE_DEBUG_VALUE,
  ABOUT_USE_EFFECT,
  ABOUT_USE_IMPERATIVE_HANDLE,
  ABOUT_USE_LAYOUT_EFFECT,
  ABOUT_USE_MEMO,
  ABOUT_USE_REDUCER,
  ABOUT_USE_REF,
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
      <NavLink to={ABOUT_USE_CALLBACK} style={{ padding: "20px" }}>
        useCallback Hook
      </NavLink>
      <NavLink to={ABOUT_USE_CONTEXT_DISPLAY} style={{ padding: "20px" }}>
        use context display
      </NavLink>
      <NavLink to={ABOUT_USE_REF} style={{ padding: "20px" }}>
        use ref Hook
      </NavLink>
      <NavLink to={ABOUT_USE_MEMO} style={{ padding: "20px" }}>
        use memo Hook
      </NavLink>
      <NavLink to={ABOUT_USE_LAYOUT_EFFECT} style={{ padding: "20px" }}>
        use Layout Effect
      </NavLink>
      <NavLink to={ABOUT_USE_IMPERATIVE_HANDLE} style={{ padding: "20px" }}>
        use memo Hook
      </NavLink>
      <NavLink to={ABOUT_USE_DEBUG_VALUE} style={{ padding: "20px" }}>
        use memo Hook
      </NavLink>
    </div>
  );
};

export default AboutHooks;
