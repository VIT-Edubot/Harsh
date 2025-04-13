import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Dashboard from "./Dashboard";

const App = () => {
  return (
    <>
      <nav>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard/123">Dashboard</Link></li>
      </ul>
    </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
