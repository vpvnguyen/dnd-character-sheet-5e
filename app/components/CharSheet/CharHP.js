import React, { useState } from "react";
import { Card } from "@material-ui/core";
// ARMOR CLASS INITIATIVE SPEED

const ArmorClass = () => {
  const [armor, setArmor] = useState(0);
  return (
    <div>
      <div>Armor Class: {armor}</div>
    </div>
  );
};
// CURRENT HIT POINTS / MAX
// TEMPORARY HIT POINTS

const HP = () => {
  const [hp, setHp] = useState(0);
  const [tempHp, setTempHp] = useState(0);
  return (
    <div>
      <div>HP: {hp}</div>
      <div>Temp HP: {tempHp}</div>
    </div>
  );
};
// Total / HIT DICE

// DEATH SAVES
// 3x success
// 3x failure
// render death saves component
const DeathSaves = () => {
  const [deathSaves, setDeathSaves] = useState([
    { success: "success", qty: 3 },
    { fail: "fail", qty: 3 }
  ]);

  console.log(deathSaves);
  return (
    <div>
      Death Saves
      <div>
        {deathSaves[0].success}: {deathSaves[0].qty}
      </div>
      <div>
        {deathSaves[1].fail}: {deathSaves[1].qty}
      </div>
    </div>
  );
};

const CharHP = () => {
  return (
    <Card>
      <div>CharHP</div>
      <HP />
      <ArmorClass />
      <DeathSaves />
    </Card>
  );
};

// fetch character armor class, hp, temp hp, hit dice from saved sheet

export default CharHP;
