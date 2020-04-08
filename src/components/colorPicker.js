import React, { Fragment, useState } from "react";

import { SketchPicker } from "react-color";

const ColorPicker = (props) => {
  const handleChange = (color) => {
    props.onChangeComplete(color.hex);
  };

  const [isDisplayed, setIsDisplayed] = useState(false);

  const toggleColorPicker = () => {
    setIsDisplayed(!isDisplayed);
  };

  return (
    <Fragment>
      <button onClick={toggleColorPicker}>
        {isDisplayed ? "Hide Color Picker" : "Pick Color"}
      </button>
      {isDisplayed ? (
        <div>
          <SketchPicker color={props.value} onChangeComplete={handleChange} />
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default ColorPicker;
