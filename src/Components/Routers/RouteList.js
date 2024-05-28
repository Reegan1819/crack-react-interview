import Home from "../Home";
import AboutReact from "../ReactFolder/AboutReact";
import { ABOUT_REACT } from "./RouteEndpoints";

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
];
