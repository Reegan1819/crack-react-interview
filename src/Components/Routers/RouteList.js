import Home from "../Home";
import AboutHooks from "../ReactFolder/AboutHooks/AboutHooks";
import AboutUseCallback from "../ReactFolder/AboutHooks/AboutUseCallback";
import AboutUseContext from "../ReactFolder/AboutHooks/AboutUseContext";
import AboutUseDebugValue from "../ReactFolder/AboutHooks/AboutUseDebugValue";
import AboutUseMemo from "../ReactFolder/AboutHooks/AboutUseMemo";
import AboutUseReducer from "../ReactFolder/AboutHooks/AboutUseReducer";
import AboutUseState from "../ReactFolder/AboutHooks/AboutUseState";
import AboutUseEffect from "../ReactFolder/AboutHooks/AboutUseeffect";
import AboutUseLayoutEffect from "../ReactFolder/AboutHooks/UseLayoutEffect";
import AboutLIfeCycleMethod from "../ReactFolder/AboutLIfeCycleMethod";
import AboutPerformance from "../ReactFolder/AboutPerformance";
import AboutReact from "../ReactFolder/AboutReact";
import {
  ABOUT_HOOKS,
  ABOUT_LIFE_CYCLE_METHOD,
  ABOUT_PERFORMANCE,
  ABOUT_REACT,
  ABOUT_USE_CALLBACK,
  ABOUT_USE_CONTEXT,
  ABOUT_USE_DEBUG_VALUE,
  ABOUT_USE_EFFECT,
  ABOUT_USE_LAYOUT_EFFECT,
  ABOUT_USE_MEMO,
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
  },
  {
    path: ABOUT_USE_CALLBACK,
    component: AboutUseCallback,
    exact: true,
  },
  {
    path: ABOUT_USE_LAYOUT_EFFECT,
    component: AboutUseLayoutEffect ,
    exact: true,
  },
  {
    path: ABOUT_USE_MEMO,
    component: AboutUseMemo  ,
    exact: true,
  },
  {
    path: ABOUT_USE_DEBUG_VALUE,
    component: AboutUseDebugValue  ,
    exact: true,
  },
  {
    path: ABOUT_PERFORMANCE,
    component: AboutPerformance  ,
    exact: true,
  },

];
