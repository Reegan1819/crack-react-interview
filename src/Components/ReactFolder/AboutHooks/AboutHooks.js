import React from "react";
import { Link, NavLink } from "react-router-dom";
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
import "./HookStyle.css";

const AboutHooks = () => {
  return (
    <div >
      <h1>What are React Hooks?</h1>
      <p>
        React Hooks are functions that let you use state and other React
        features in functional components. They allow you to use state and other
        React features without writing a class.
      </p>
      <div>
        <NavLink to={ABOUT_USE_STATE} className="contains">
          useState Hook
        </NavLink>
        <NavLink to={ABOUT_USE_EFFECT} className="contains">
          useEffect Hook
        </NavLink>
        <NavLink to={ABOUT_USE_REDUCER} className="contains">
          useReducer Hook
        </NavLink>
        <Link to={ABOUT_USE_CONTEXT} className="contains">
          <span>useContext Hook</span>
        </Link>
        <NavLink to={ABOUT_USE_CALLBACK} className="contains">
          useCallback Hook
        </NavLink>
        <NavLink to={ABOUT_USE_CONTEXT_DISPLAY} className="contains">
          use context display
        </NavLink>
        <NavLink to={ABOUT_USE_REF} className="contains">
          use ref Hook
        </NavLink>
        <NavLink to={ABOUT_USE_MEMO} className="contains">
          use memo Hook
        </NavLink>
        <NavLink to={ABOUT_USE_LAYOUT_EFFECT} className="contains">
          use Layout Effect
        </NavLink>
        <NavLink to={ABOUT_USE_IMPERATIVE_HANDLE} className="contains">
          use imperative handle
        </NavLink>
        <NavLink to={ABOUT_USE_DEBUG_VALUE} className="contains">
          use debug value
        </NavLink>
      </div>
    </div>
  );
};

export default AboutHooks;
