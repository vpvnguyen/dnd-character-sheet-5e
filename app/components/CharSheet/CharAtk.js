// ATTACKS & SPELLCASTING
// create 3 columns and 3 rows containing: Atk Name, atk bonus, dmg/type
// create notes section

import React, { useState } from "react";
import { Card, Grid, TextField } from "@material-ui/core";

const CharAtk = () => {
  const [atk, setAtk] = useState(0);
  return (
    <Card>
      <h3>CharAtk</h3>
      <div>ATK NAME</div>
      <div>ATK: {atk}</div>
      <div>ATK BONUS</div>
      <div>DMG/TYPE</div>
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

export default CharAtk;
