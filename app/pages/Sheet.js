import React, { useState } from "react";

// material ui
import Checkbox from "@material-ui/core/Checkbox";

// components
import Layout from "../components/Layout";
import CharHeader from "../components/CharSheet/CharHeader";
import CharStats from "../components/CharSheet/CharStats";
import Panel from "../test/Panel";

const Sheet = () => {
  const [selectedSheet, setSelectedSheet] = useState([]);

  const getSelectedSheet = childData => {
    setSelectedSheet();
  };

  const handleCheckBox = event => {
    console.log(event.target.checked);
    console.log(event.target.name);
  };

  const charSelected = [
    {
      name: "Header",
      component: <CharHeader />,
      checked: true
    },
    {
      name: "Stats",
      component: <CharStats />,
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

  return (
    <>
      <Layout>
        <div>
          {charSelected.map((charSelect, index) => (
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
        <CharHeader />
        <CharStats />
        <Panel />
      </Layout>
    </>
  );
};

export default Sheet;
