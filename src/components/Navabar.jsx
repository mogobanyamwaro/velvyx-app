import React from 'react';
import { Link } from 'react-router-dom';

function Navabar() {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Velyx.</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/features">what we offer</Link>
            </li>
            <li>
              <Link to="docs">Documenttion</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navabar;
