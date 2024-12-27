import React from 'react';

function Div({ divColor, divFontColor, setDivColor, setDivFontColor }) {
  return (
    <div className="previewDiv" style={{ backgroundColor: divColor, color: divFontColor }}>
      <h1>The Color Picker</h1>
      <p>
        Hey Guys👋!! This is the site using which you can customize the page and check what color combination will be best for 
        your webpage. You can visualize your webpage with different themes with ease of time and effort by just clicking the 
        color you need. Enjoy and make a great webpage. This is just an initial version; we decided to add font-family and 
        font-size as well in future updates.
      </p>

      <div className="colbtns">
        <div className="divFontColor">
          <label>Font Color: </label>
          <input
            type="color"
            value={divFontColor}
            onChange={(e) => setDivFontColor(e.target.value)}
          />
        </div>
        <div className="divColor">
          <label>Div Color: </label>
          <input
            type="color"
            value={divColor}
            onChange={(e) => setDivColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Div;
