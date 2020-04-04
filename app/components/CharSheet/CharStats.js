import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Divider,
  InputLabel,
  Input,
  FormControl,
  Typography,
  TextField,
} from "@material-ui/core";

import CharStatsModel from "../../Model/CharStats.Model";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 0),
  },
  paper: {
    // maxWidth: 400, // card width
    margin: `${theme.spacing(1)}px auto`, // space veritcally between cards
    textAlign: "center",
    padding: theme.spacing(2), // veritcal padding between cards
  },
  divider: {
    margin: "15px",
  },
}));

const CharStats = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1" gutterBottom>
          Attributes
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
          <FormControl>
            {CharStatsModel.stats.map((value, index) => (
              <Grid item xs key={index}>
                <TextField
                  id={`attribute-${value}`}
                  label={value}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            ))}
          </FormControl>
        </Grid>

        <Divider className={classes.divider} />
        <div>SKILLS</div>
        {CharStatsModel.skills.map((value, index) => (
          <Grid item xs key={index}>
            <TextField
              id={`attribute-${value.name}`}
              label={`${value.name} (${value.type})`}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        ))}
        <Divider className={classes.divider} />
        <div>SAVING THROWS</div>
        {CharStatsModel.stats.map((value, index) => (
          <Grid item xs key={index}>
            <TextField
              id={`attribute-${value}`}
              label={value}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
        ))}

        <Divider className={classes.divider} />

        <div>INSPIRATION</div>
        <div>PROFICIENCY BONUS</div>
        <Divider className={classes.divider} />

        <div>PASSIVE WISDOM (PERCEPTION)</div>
      </Paper>
    </div>
  );
};

export default CharStats;
