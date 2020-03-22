// ATTACKS & SPELLCASTING
// create 3 columns and 3 rows containing: Atk Name, atk bonus, dmg/type
// create notes section

import React, { useState } from "react";
import { Card } from "@material-ui/core";

const CharAtk = () => {
  const [atk, setAtk] = useState(0);
  return (
    <div>
      <Card>CharAtk</Card>
      <div>ATK: {atk}</div>
    </div>
  );
};

export default CharAtk;
