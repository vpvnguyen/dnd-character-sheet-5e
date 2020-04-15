import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

import CharStatsModel from "../../Model/CharStats.Model";

const CharSavingThrows = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default CharSavingThrows;
