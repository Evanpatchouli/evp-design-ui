// import React from 'react';
// import logo from './logo.svg';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/header";
import Preview from "./preview/home";
import Anchors from "./components/anchors";
import NotFound from "./preview/404";
import { routes } from "./router";
import DocsMenu from "./menu";
import "./App.css";
import "./preview/index.css";
import "./lib/global.css";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { recentRoutes, rememberRoute } from "./router/store";
const GeneralView = lazy(() => import("./preview/general"));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialVisit = useRef(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggle = useRef<HTMLButtonElement>(null);
  function closeMenu() {
    if (menuOpen) menuToggle.current?.focus();
    setMenuOpen(false);
  }
  const showMenu = location.pathname === "/general" || location.pathname.startsWith("/components/");
  const now = new Date().toLocaleDateString();
  useEffect(() => {
    if (initialVisit.current) {
      initialVisit.current = false;
      if (!window.location.hash && location.pathname === "/") {
        const history = recentRoutes();
        const last = history[history.length - 1];
        if (last && last !== "/") {
          navigate(last, { replace: true });
          return;
        }
      }
    }
    rememberRoute(location.pathname);
    setMenuOpen(false);
  }, [location.pathname, navigate]);

  return (
    <div className="App">
      <Header />
      <div className={showMenu ? "Main with-menu" : "Main"}>
        {showMenu && (
          <>
            <button
              ref={menuToggle} type="button" className="docs-menu-toggle" aria-expanded={menuOpen} aria-controls="docs-navigation"
              onClick={() => setMenuOpen(open => !open)}
            >
              Components
            </button>
            <nav id="docs-navigation" aria-label="Documentation" className={`NavMenu${menuOpen ? " open" : ""}`}
              onKeyDown={event => { if (event.key === "Escape") closeMenu(); }}>
              <DocsMenu onNavigate={closeMenu} />
            </nav>
          </>
        )}
        <main className="Content">
          <Suspense fallback={<p role="status">Loading documentation…</p>}>
            <Routes>
              <Route path="/" element={<Preview />} />
              <Route path="/general" element={<GeneralView />} />
              {routes.map(({ path, Page }) => (
                <Route key={path} path={`/components${path}`} element={<Page />} />
              ))}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Anchors />
          <div className="foot">
            <p>CopyRight &copy; 2023-{now} Evp Design UI</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
