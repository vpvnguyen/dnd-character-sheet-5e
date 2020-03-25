import React, { useState } from "react";

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

// panel
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Checkbox,
  Divider
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  panel: {
    width: "100%"
  },
  panelHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  // card spacing
  cardSpacing: {
    maxWidth: 400, // card width
    margin: `${theme.spacing(1)}px auto`, // space veritcally between cards
    textAlign: "center",
    padding: theme.spacing(2) // veritcal padding between cards
  }
}));

const Sheet = () => {
  const classes = useStyles();

  // create hook with array of components
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

  const [sheet, setSheet] = useState(charSelected);

  // console.log(...sheet);

  const handleCheckBox = event => {
    console.log("");
    console.log(event.target.dataset.index);
    console.log(event.target.name);
    console.log(event.target.checked);
    console.log("");
  };

  return (
    <>
      <Layout>
        <div className={classes.panel}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.panelHeading}>Filter</Typography>
            </ExpansionPanelSummary>
            <Divider />
            <ExpansionPanelDetails>
              {charSelected.map((charSelect, index) => {
                return (
                  <span key={`char-select-menu-${index}`}>
                    <Checkbox
                      key={index}
                      checked={charSelect[index]}
                      onChange={handleCheckBox}
                      inputProps={
                        ({ "aria-label": "primary checkbox" },
                        { "data-index": index })
                      }
                      name={charSelect.name}
                    />
                    {charSelect.name}
                  </span>
                );
              })}
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>

        <div>
          {charSelected.map((charSelect, index) => {
            if (charSelect.checked)
              return (
                <div key={index} className={classes.cardSpacing}>
                  {charSelect.component}
                </div>
              );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Sheet;
