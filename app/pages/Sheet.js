import React, { useState } from "react";

// material ui
import Checkbox from "@material-ui/core/Checkbox";

// components
import Layout from "../components/Layout";
import CharHeader from "../components/CharSheet/CharHeader";
import CharStats from "../components/CharSheet/CharStats";
import CharHP from "../components/CharSheet/CharHP";
import CharAtk from "../components/CharSheet/CharAtk";
import CharProf from "../components/CharSheet/CharProf";
import CharTraits from "../components/CharSheet/CharTraits";
import CharEquip from "../components/CharSheet/CharEquip";
import CharFeats from "../components/CharSheet/CharFeats";

const Sheet = () => {
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
      component: <CharHP />,
      checked: true
    },
    {
      name: "ATK",
      component: <CharAtk />,

      checked: true
    },
    {
      name: "Prof",
      component: <CharProf />,
      checked: true
    },
    {
      name: "Traits",
      component: <CharTraits />,
      checked: true
    },
    {
      name: "Equip",
      component: <CharEquip />,
      checked: true
    },
    {
      name: "Feats",
      component: <CharFeats />,
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

        <div>
          {charSelected.map((charSelect, index) => {
            if (charSelect.checked) return charSelect.component;
          })}
        </div>
      </Layout>
    </>
  );
};

export default Sheet;
