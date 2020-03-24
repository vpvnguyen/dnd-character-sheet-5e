// ALL NOTES

// PERSONALITY TRAITS
// IDEALS
// BONDS
// FLAWS
import React from "react";
import { Card, Grid, TextField } from "@material-ui/core";

const CharTraits = () => {
  return (
    <Card>
      <h3>CharTraits</h3>
      <Grid>
        <TextField
          id="outlined-multiline-static"
          label="IDEALS notes section"
          multiline
          rows="2"
          variant="outlined"
          // value={charDesc}
          // onChange={handleCharDescChange}
        />
      </Grid>
      <Grid>
        <TextField
          id="outlined-multiline-static"
          label="BONDS notes section"
          multiline
          rows="2"
          variant="outlined"
          // value={charDesc}
          // onChange={handleCharDescChange}
        />
      </Grid>
      <Grid>
        <TextField
          id="outlined-multiline-static"
          label="FLAWS notes section"
          multiline
          rows="2"
          variant="outlined"
          // value={charDesc}
          // onChange={handleCharDescChange}
        />
      </Grid>
    </Card>
  );
};

export default CharTraits;
