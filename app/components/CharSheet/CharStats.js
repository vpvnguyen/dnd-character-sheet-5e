// COLUMN 1: Str, Dex, Constitution, Intel, Wis, Charisma
// COLUMN 2:
// - ROW 1: Inspiration
// - ROW 2: Proficiency Bonus
// - ROW 3: (saving throws) str, dex, const, intel, wis, char
// - ROW 4: (skills) Acrobatics(dex), Animal Handling(wis), Arcana(int), Athletics(str), deception(cha), history(int), insight(wis), intimidation(cha),
// - ROW 5:

// STATS
// STRENGTH
// DEXTERITY
// CONSTITUTION
// INTELLIGENCE
// WISDOM
// CHARISMA

// INSPIRATION
// PROFICIENCY BONUS

// SKILLS
// Acrobatics (Dex)
// Animal Handling (Wis)
// Arcana (Int)
// Athletics (Str)
// Deception (Cha)
// History (Int)
// Insight (Wis)
// Intimidation (Cha)
// Investigation (Int)
// Medicine (Wis)
// Nature (Int)
// Perception (Wis)
// Performance (Cha)
// Persuasion (Cha)
// Religion (Int)
// Sleight of Hand (Dex)
// Stealth (Dex)
// Survival (Wis)

// SAVING THROWS
// Strength
// Dexterity
// Constitution
// Intelligence
// Wisdom
// Charisma

// PASSIVE WISDOM (PERCEPTION)

import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Divider,
  InputLabel,
  Input,
  FormControl
} from "@material-ui/core";

import CharStatsModel from "../../Model/CharStats.Model";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 0)
  },
  paper: {
    // maxWidth: 400, // card width
    margin: `${theme.spacing(1)}px auto`, // space veritcally between cards
    textAlign: "center",
    padding: theme.spacing(2) // veritcal padding between cards
  },
  divider: {
    margin: "15px"
  }
}));

const CharStats = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          {CharStatsModel.stats.map((value, index) => (
            <div>
              <Grid item xs key={index}>
                <FormControl>
                  <InputLabel>{value}</InputLabel>
                  <Input fullWidth placeholder={value} />
                </FormControl>
              </Grid>
            </div>
          ))}
        </Grid>

        <Divider className={classes.divider} />

        <div>INSPIRATION</div>
        <div>PROFICIENCY BONUS</div>

        <Divider className={classes.divider} />
        <div>SKILLS</div>
        {CharStatsModel.skills.map((value, index) => (
          <div>
            {value.name} ({value.type})
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default CharStats;
