import AboutPureComponents from "../AboutPurecomponents";
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
import AboutTypeScript from "../Typescript/AboutTypeScript";
import AboutInterfaces from "../Typescript/AboutInterfaces";
import AboutEnums from "../Typescript/AboutEnums";
import AboutGenerics from "../Typescript/AboutGenerics";
import AboutDecorators from "../Typescript/AboutDecorators";
import AboutModules from "../Typescript/AboutModules";
import AboutClasses from "../Typescript/AboutClasses";
import AboutNamespaces from "../Typescript/AboutNameSpaces";
import AboutRedux from "../Redux/AboutRedux";
import AboutPureFunction from "../AboutPureFunction";
import AboutTesting from "../AboutTesting";
import {
  ABOUT_HOOKS,
  ABOUT_LIFE_CYCLE_METHOD,
  ABOUT_PERFORMANCE,
  ABOUT_PURE_COMP,
  ABOUT_REACT,
  ABOUT_TYPE_SCRIPT,
  ABOUT_USE_CALLBACK,
  ABOUT_USE_CONTEXT,
  ABOUT_USE_DEBUG_VALUE,
  ABOUT_USE_EFFECT,
  ABOUT_USE_LAYOUT_EFFECT,
  ABOUT_USE_MEMO,
  ABOUT_USE_REDUCER,
  ABOUT_USE_STATE,
  ABOUT_INTERFACES,
  ABOUT_ENUMS,
  ABOUT_GENERICS,
  ABOUT_DECORATORS,
  ABOUT_NAMESPACES,
  ABOUT_MODULES,
  ABOUT_CLASSES,
  ABOUT_REDUX,
  ABOUT_PURE_FUNCTION,
  ABOUT_TESTING,
  ABOUT_REACT_ROUTER,
  ABOUT_NEXT_JS,
} from "./RouteEndpoints";
import AboutReactRouter from "../ReactRouter/AboutReactRouter";
import AboutNextJs from "../../Comp/AboutNextJs";

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
    component: AboutUseLayoutEffect,
    exact: true,
  },
  {
    path: ABOUT_USE_MEMO,
    component: AboutUseMemo,
    exact: true,
  },
  {
    path: ABOUT_USE_DEBUG_VALUE,
    component: AboutUseDebugValue,
    exact: true,
  },
  {
    path: ABOUT_PERFORMANCE,
    component: AboutPerformance,
    exact: true,
  },
  {
    path: ABOUT_PURE_COMP,
    component: AboutPureComponents,
    exact: true,
  },
  {
    path: ABOUT_TYPE_SCRIPT,
    component: AboutTypeScript,
    exact: true,
  },
  {
    path: ABOUT_INTERFACES,
    component: AboutInterfaces,
    exact: true,
  },
  {
    path: ABOUT_ENUMS,
    component: AboutEnums,
    exact: true,
  },
  {
    path: ABOUT_GENERICS,
    component: AboutGenerics,
    exact: true,
  },
  {
    path: ABOUT_DECORATORS,
    component: AboutDecorators,
    exact: true,
  },
  {
    path: ABOUT_NAMESPACES,
    component: AboutNamespaces,
    exact: true,
  },
  {
    path: ABOUT_MODULES,
    component: AboutModules,
    exact: true,
  },
  {
    path: ABOUT_CLASSES,
    component: AboutClasses,
    exact: true,
  },
  {
    path: ABOUT_REDUX,
    component: AboutRedux,
    exact: true,
  },

  {
    path: ABOUT_PURE_FUNCTION,
    component: AboutPureFunction,
    exact: true,
  },
  {
    path: ABOUT_TESTING,
    component: AboutTesting,
    exact: true,
  },
  {
    path: ABOUT_REACT_ROUTER,
    component: AboutReactRouter,
    exact: true,
  },
  {
    path: ABOUT_NEXT_JS,
    component: AboutNextJs,
    exact: true,
  },
];
