import React, { useState } from "react";
import { Grid, TextField } from "@material-ui/core";

import CharStatsModel from "../../Model/CharStats.Model";

const CharSkills = () => (
  <React.Fragment>
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
  </React.Fragment>
);

export default CharSkills;
