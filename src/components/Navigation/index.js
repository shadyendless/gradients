import React from 'react';

const Navigation = ({ fontColor }) => (
  <nav class="nav container">
    <div class="is-flex justify-content-space-between align-items-center">
      <div class="logo" style={{ color: fontColor }}>
        <a href="https://www.jacob-foster.com/gradients">Gradients</a>
        <span>by <a href="https://www.jacob-foster.com/">Jacob Foster</a></span>
      </div>
    </div>
  </nav>
);

export default Navigation;
