import React, { useState } from "react";
import { Card } from "@material-ui/core";
import fetch from "isomorphic-unfetch";

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
const HitDice = () => {
  return <div>HIT DICE</div>;
};

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
      <h3>CharHP</h3>
      <HP />
      <ArmorClass />
      <HitDice />
      <DeathSaves />
    </Card>
  );
};

// fetch character armor class, hp, temp hp, hit dice from saved sheet API

CharHP.getInitialProps = async () => {
  // const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");

  //   const res = await fetch("http://localhost:3001/getChar");
  // const data = await res.json();
  console.log(`CharHP data fetched. Count: ${data.length}`);

  // const getCharData = await charSheetAPI
  //   .getChar()
  //   .catch(err => console.log(err))
  //   .then(logging => logging.data.getChar);
  // .then(result => result.data);

  const string = "CharHP API";
  // return { shows: data.map(entry => entry.show), string, getCharData };
  // return { shows: data.map(entry => entry.show), string };
  return string;
};

export default CharHP;
