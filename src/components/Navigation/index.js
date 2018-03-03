import Link from 'gatsby-link';
import React, { Component } from 'react';

const Navigation = ({ fontColor }) => (
  <nav className="nav container">
    <div className="is-flex justify-content-space-between align-items-center">
      <div className="logo" style={{ color: fontColor }}>
        <Link to="/">Gradients</Link>
        <span>by <a href="https://www.jacob-foster.com/">Jacob Foster</a></span>
      </div>
    </div>
  </nav>
);

export default Navigation;
