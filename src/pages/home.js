import React, { useState } from "react";

import ColorPicker from "../components/colorPicker";
import DateTimePicker from "../components/dateTimePicker";

const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [fontColor, setFontColor] = useState("#fff");

  const handleBackgroundColorChange = (newValue) => {
    setBackgroundColor(newValue);
  };

  const handleFontColorChange = (newValue) => {
    setFontColor(newValue);
  };

  return (
    <div
      className="container"
      style={{ backgroundColor: backgroundColor, color: fontColor }}
    >
      <DateTimePicker />
      <div className="color-picker">
        <h2>BG Color</h2>
        <ColorPicker
          value={backgroundColor}
          onChangeComplete={handleBackgroundColorChange}
        />
      </div>
      <div className="color-picker">
        <h2>Font Color</h2>
        <ColorPicker
          value={fontColor}
          onChangeComplete={handleFontColorChange}
        />
      </div>
    </div>
  );
};

export default Home;
