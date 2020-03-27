const CharSheetModel = {
  stats: {
    str: "Strength",
    dex: "Dexterity",
    con: "Constitution",
    int: "Intelligence",
    wis: "Wisdom",
    cha: "Charisma"
  },
  skills: {
    acrobatics: "Acrobatics",
    // type: "Dex"
    animalHandling: "Animal Handling",
    // type: "Wis"
    arcana: "Arcana",
    // type: "Int"
    athletics: "Athletics",
    // type: "Str"
    deception: "Deception",
    // type: "Cha"
    history: "History",
    // type: "Int"
    insight: "Insight",
    // type: "Wis"
    intimidation: "Intimidation",
    // type: "Cha"
    investigation: "Investigation",
    // type: "Int"
    medicine: "Medicine",
    // type: "Wis"
    nature: "Nature",
    // type: "Int"
    perception: "Perception",
    // type: "Wis"
    performance: "Performance",
    // type: "Cha"
    persuasion: "Persuasion",
    // type: "Cha"
    Religion: "Religion",
    // type: "Int"
    sleightOfHand: "Sleight of Hand",
    // type: "Dex"
    stealth: "Stealth",
    // type: "Dex"
    survival: "Survival"
    // type: "Wis"
  },
  getSubStr: stat => stat.substring(0, 3)
};

CharSheetModel;
console.log(CharSheetModel.getSubStr(CharSheetModel.stats.str)); // Str
