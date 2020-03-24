// OTHER PROFICIENCIES & LANGUAGES
// NOTES
import React from "react";
import { Card, Grid, TextField } from "@material-ui/core";

const CharProf = () => {
  return (
    <Card>
      <h3>CharProf</h3>
      <Grid>
        <TextField
          id="outlined-multiline-static"
          label="Description"
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

export default CharProf;
