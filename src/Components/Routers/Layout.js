import React from "react";
import { RouteList } from "./RouteList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Router>
        <Routes>
          {RouteList.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.component />}
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default Layout;
