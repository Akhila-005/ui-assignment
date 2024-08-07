// src/Router.tsx

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Sidebar from "./Sidebar";
import TopBar from "./Topbar";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <TopBar />
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
