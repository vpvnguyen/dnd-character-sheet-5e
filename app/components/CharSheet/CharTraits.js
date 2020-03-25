import React from "react";
import { Card, Grid, TextField } from "@material-ui/core";

const CharTraits = () => {
  const traits = ["Personality Traits", "Ideals", "Bonds", "Flaws"];

  return (
    <Card>
      <h3>CharTraits</h3>
      {traits.map((value, index) => (
        <Grid key={index}>
          <TextField
            id="outlined-multiline-static"
            label={value}
            multiline
            rows="2"
            variant="outlined"
            placeholder={value}
            // onChange={handleCharDescChange}
          />
        </Grid>
      ))}
    </Card>
  );
};

export default CharTraits;
