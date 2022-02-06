import React from "react";
import "./App.css";

import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import Page1 from "./Pages/Pages1";
import Page2 from "./Pages/Pages2";
import Page3 from "./Pages/Pages3";

function App() {
  return (
      <div className="App">
        <h1>Hello</h1>
        <nav 
        style={{
          display: 'flex',
          gap: '1em',
        }}>
          <Link to="/">Home</Link>
          <Link to="users/*">Users</Link>
          <Link to="contact/*">Contact us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="users/*" element={<Page2 />} />
          <Route path="contact/*" element={<Page3 />} />
        </Routes>
      </div>
  );
}

export default App;
