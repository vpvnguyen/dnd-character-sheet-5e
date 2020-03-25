import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
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
        <Divider className={classes.divider} />
        <div>SAVING THROWS</div>
        {CharStatsModel.stats.map((value, index) => (
          <div>{value}</div>
        ))}
        <Divider className={classes.divider} />

        <div>PASSIVE WISDOM (PERCEPTION)</div>
      </Paper>
    </div>
  );
};

export default CharStats;
