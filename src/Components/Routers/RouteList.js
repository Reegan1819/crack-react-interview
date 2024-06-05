import Home from "../Home";
import AboutHooks from "../ReactFolder/AboutHooks/AboutHooks";
import AboutUseContext from "../ReactFolder/AboutHooks/AboutUseContext";
import AboutUseReducer from "../ReactFolder/AboutHooks/AboutUseReducer";
import AboutUseState from "../ReactFolder/AboutHooks/AboutUseState";
import AboutUseEffect from "../ReactFolder/AboutHooks/AboutUseeffect";
import AboutLIfeCycleMethod from "../ReactFolder/AboutLIfeCycleMethod";
import AboutReact from "../ReactFolder/AboutReact";
import {
  ABOUT_HOOKS,
  ABOUT_LIFE_CYCLE_METHOD,
  ABOUT_REACT,
  ABOUT_USE_CONTEXT,
  ABOUT_USE_EFFECT,
  ABOUT_USE_REDUCER,
  ABOUT_USE_STATE,
} from "./RouteEndpoints";

export const RouteList = [
  {
    path: "/crack-react-interview",
    component: Home,
    exact: true,
  },
  {
    path: ABOUT_REACT,
    component: AboutReact,
    exact: true,
  },
  {
    path: ABOUT_LIFE_CYCLE_METHOD,
    component: AboutLIfeCycleMethod,
    exact: true,
  },
  {
    path: ABOUT_USE_STATE,
    component: AboutUseState,
    exact: true,
  },
  {
    path: ABOUT_HOOKS,
    component: AboutHooks,
    exact: true,
  },
  {
    path: ABOUT_USE_REDUCER,
    component: AboutUseReducer,
    exact: true,
  },
  {
    path: ABOUT_USE_CONTEXT,
    component: AboutUseContext,
  },
  {
    path: ABOUT_USE_EFFECT,
    component: AboutUseEffect,
    exact: true,
  }
];
