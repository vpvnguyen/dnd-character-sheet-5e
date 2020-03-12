import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Divider,
  InputLabel,
  Input,
  FormControl,
  TextField,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  },
  paper: {
    maxWidth: 400, // card width
    margin: `${theme.spacing(1)}px auto`, // space veritcally between cards
    textAlign: "center",
    padding: theme.spacing(2) // veritcal padding between cards
  },
  divider: {
    margin: "15px"
  }
}));

const charSexes = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  },
  {
    value: "Neutral",
    label: "Neutral"
  }
];

const charAlignments = [
  {
    value: "LawfulGood",
    label: "Lawful Good"
  },
  {
    value: "NeutralGood",
    label: "Neutral Good"
  },
  {
    value: "LawfulGood",
    label: "Lawful Good"
  },
  {
    value: "ChaoticGood",
    label: "Chaotic Good"
  },
  {
    value: "LawfulNeutral",
    label: "Lawful Neutral"
  },
  {
    value: "Neutral",
    label: "Neutral"
  },
  {
    value: "ChaoticNeutral",
    label: "Chaotic Neutral"
  },
  {
    value: "LawfulEvil",
    label: "Lawful Evil"
  },
  {
    value: "NeutralEvil",
    label: "Neutral Evil"
  }
];

export default function Sheet() {
  const classes = useStyles();
  const [charName, setCharName] = useState("");
  const [charClass, setCharClass] = useState("");
  const [charLevel, setCharLevel] = useState("");
  const [charAlignment, setCharAlignment] = useState("");
  const [charRace, setCharRace] = useState("");
  const [charSex, setCharSex] = useState("");
  const [charDesc, setCharDesc] = useState("");

  const handleCharNameChange = event => {
    setCharName(event.target.value);
    console.log(event.target.value);
  };

  const handleCharClassChange = event => {
    setCharClass(event.target.value);
    console.log(event.target.value);
  };

  const handleCharLevelChange = event => {
    setCharLevel(event.target.value);
    console.log(event.target.value);
  };

  const handleCharAlignmentChange = event => {
    setCharAlignment(event.target.value);
    console.log(event.target.value);
  };

  const handleCharRaceChange = event => {
    setCharRace(event.target.value);
    console.log(event.target.value);
  };

  const handleCharSexChange = event => {
    setCharSex(event.target.value);
    console.log(event.target.value);
  };

  const handleCharDescChange = event => {
    setCharDesc(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1" gutterBottom>
          Character Sheet 5e
        </Typography>

        <Divider className={classes.divider} />

        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input
                fullWidth
                placeholder="Name"
                value={charName}
                onChange={handleCharNameChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs>
            <Grid item xs>
              <FormControl>
                <InputLabel>Class</InputLabel>
                <Input
                  fullWidth
                  placeholder="Class"
                  value={charClass}
                  onChange={handleCharClassChange}
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Level</InputLabel>
              <Input
                fullWidth
                placeholder="Level"
                value={charLevel}
                onChange={handleCharLevelChange}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs>
            <TextField
              id="char-alignment"
              select
              label="Alignment"
              value={charAlignment}
              onChange={handleCharAlignmentChange}
              helperText="Select Alignment"
            >
              {charAlignments.map((val, index) => (
                <MenuItem key={`char-alignment-${index}`} value={val.value}>
                  {val.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Race</InputLabel>
              <Input
                fullWidth
                placeholder="Race"
                value={charRace}
                onChange={handleCharRaceChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs>
            <TextField
              id="char-sex"
              select
              label="Sex"
              value={charSex}
              onChange={handleCharSexChange}
              helperText="Select characer sex"
            >
              {charSexes.map((val, index) => (
                <MenuItem key={`char-sex-${index}`} value={val.value}>
                  {val.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>

        <Grid>
          <FormControl>
            <InputLabel>Description</InputLabel>
            <Input
              fullWidth
              placeholder="Description"
              value={charDesc}
              onChange={handleCharDescChange}
            />
          </FormControl>
        </Grid>
      </Paper>
    </div>
  );
}
