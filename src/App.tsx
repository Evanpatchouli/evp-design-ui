// import React from 'react';
// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "./components/header";
import GeneralView from "./preview/general";
import Preview from "./preview/home";
import Anchors from "./components/anchors";
import NotFound from "./preview/404";
import { routes } from "./router";
import DocsMenu from "./menu";
import "./App.css";
import "./preview/index.css";
import "./lib/global.css";
import { useEffect, useRef } from "react";
import { getRouteStore, updateRouteCurrent, linkTo } from "./router/store";
function App() {
  const location = useLocation();
  const now = new Date().toLocaleDateString();
  const didMount = useRef(false);
  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      const routeStore = getRouteStore();
      if (routeStore.history.length > 0 && location.pathname !== routeStore.history[routeStore.history.length - 1]) {
        linkTo(routeStore.history[routeStore.history.length - 1], true);
      }
      return;
    } else {
      updateRouteCurrent(location.pathname);
    }
  }, [location.pathname]);

  return (
    <div className="App">
      <Header />
      {/* <header className="App-header">
        {location.pathname==='/' ? <img src={logo} className="App-logo" alt="logo" /> : null}
      </header> */}
      <div className="Main">
        <div
          className="evp NavMenu"
          style={{
            display: location.pathname === "/" || location.pathname.includes("/404") ? "none" : void 0,
          }}
        >
          <DocsMenu />
        </div>
        <div
          className="Content"
          style={{
            marginLeft: location.pathname === "/" || location.pathname === "/404" ? "0px" : "260px",
          }}
        >
          <Routes>
            <Route path="/" key={"home"} element={<Preview />}></Route>
            <Route path="/general" key={"general"} element={<GeneralView />}></Route>
            {routes.map((route) => (
              <Route key={route.key} path={`/components${route.path}`} element={route.element} />
            ))}
            <Route path="/404" key={"404"} element={<NotFound />}></Route>
            <Route path="*" key={"404-catch"} element={<NotFound />}></Route>
          </Routes>
          <Anchors />
          <div className="foot">
            <p>CopyRight &copy; 2023-{now} Evp Design UI</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
