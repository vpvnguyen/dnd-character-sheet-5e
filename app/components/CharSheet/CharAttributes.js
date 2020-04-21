import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Divider,
  FormControl,
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

const CharAttributes = () => {
  const classes = useStyles();

  const [str, setStr] = useState(0);

  return (
    <React.Fragment>
      <h4>Attributes</h4>
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
    </React.Fragment>
  );
};

export default CharAttributes;
