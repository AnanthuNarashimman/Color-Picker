import React from 'react';

function NavBar({ navColor, navFontColor, setNavColor, setNavFontColor }) {
  return (
    <div className="navbar" style={{ backgroundColor: navColor, color: navFontColor }}>
      <ul className="navitems">
        <li>Explore</li>
        <li>Different</li>
        <li>Color</li>
        <li>Themes</li>
        <li>Here</li>
      </ul>
      <div className="textColor">
        <label>Text Color: </label>
        <input
          type="color"
          value={navFontColor}
          onChange={(e) => setNavFontColor(e.target.value)}
        />
      </div>
      <div className="navColor">
        <label>Nav Color: </label>
        <input
          type="color"
          value={navColor}
          onChange={(e) => setNavColor(e.target.value)}
        />
      </div>
    </div>
  );
}

export default NavBar;
