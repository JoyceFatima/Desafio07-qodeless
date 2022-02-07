import React from "react";
import "./App.css";

import { Link } from "react-router-dom";
import Rotas from "./Routes/Rotas";

function App() {
  return (
      <div className="App">
        <h1>Hello</h1>
        <nav 
        style={{
          display: 'flex',
          gap: '1em',
          justifyContent: 'center',
        }}>
          <Link to="/">Home</Link>
          <Link to="users/*">Users</Link>
          <Link to="contact/*">Contact us</Link>
        </nav>
        <div>
          <Rotas />
        </div>
      </div>
  );
}

export default App;
