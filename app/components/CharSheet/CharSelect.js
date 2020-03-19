import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

const CharSelectMenu = () => {
  const charSelects = [
    {
      name: "Header",
      checked: true
    },
    {
      name: "Stats",
      checked: true
    },
    {
      name: "HP",
      checked: true
    },
    {
      name: "ATK",
      checked: true
    },
    {
      name: "Prof",
      checked: true
    },
    {
      name: "Traits",
      checked: true
    },
    {
      name: "Equip",
      checked: true
    },
    {
      name: "Feats",
      checked: true
    }
  ];

  const handleCheckBox = event => {
    console.log(event.target.checked);
    console.log(event.target.name);
  };

  return (
    <div>
      {charSelects.map((charSelect, index) => (
        <span key={`char-select-menu-${index}`}>
          <Checkbox
            checked={charSelect[index]}
            onChange={handleCheckBox}
            inputProps={{ "aria-label": "primary checkbox" }}
            name={charSelect.name}
          />
          {charSelect.name}
        </span>
      ))}
    </div>
  );
};

export default CharSelectMenu;
