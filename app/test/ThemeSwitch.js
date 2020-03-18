import React, { useState } from "react";
import { FormGroup, FormControlLabel, Switch } from "@material-ui/core";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  // refactor to npm dark reader
  const handleThemeSwitch = () => {
    setDarkMode(event.target.checked);
    if (!event.target.checked) return console.log("lightmode");
    return console.log("darkmode");
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            color="default"
            onChange={handleThemeSwitch}
            aria-label="login switch"
          />
        }
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />
    </FormGroup>
  );
};

export default ThemeSwitch;
