import React, { useState } from 'react';
import NavBar from './NavBar';
import Div from './Div';

function App() {
  const [bodyColor, setBodyColor] = useState("#f4f4f4");
  const [navColor, setNavColor] = useState("#666");
  const [navFontColor, setNavFontColor] = useState("#000000");
  const [divColor, setDivColor] = useState("#f4f4f4");
  const [divFontColor, setDivFontColor] = useState("#000000");

  function changeBodyColor(newColor) {
    setBodyColor(newColor);
    document.body.style.background = newColor;
  }

  return (
    <div>
      <NavBar
        navColor={navColor}
        navFontColor={navFontColor}
        setNavColor={setNavColor}
        setNavFontColor={setNavFontColor}
      />
      <div className="bodyColor">
        <label>Body Color: </label>
        <input
          type='color'
          value={bodyColor}
          onChange={(e) => {changeBodyColor(e.target.value);
          }}
        />
      </div>
      <Div
        divColor={divColor}
        divFontColor={divFontColor}
        setDivColor={setDivColor}
        setDivFontColor={setDivFontColor}
      />
    </div>
  );
}

export default App;
