import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
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

const sexes = [
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

const alignments = [
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
  const [sex, setSex] = React.useState("");
  const [alignment, setAlignment] = React.useState("");

  const handleSexChange = event => {
    setSex(event.target.value);
    console.log(event.target.value);
  };

  const handleAlignmentChange = event => {
    setAlignment(event.target.value);
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
              <Input fullWidth placeholder="Name" />
            </FormControl>
          </Grid>
          <Grid item xs>
            <Grid item xs>
              <FormControl>
                <InputLabel>Class</InputLabel>
                <Input fullWidth placeholder="Class" />
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Level</InputLabel>
              <Input fullWidth placeholder="Level" />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs>
            <FormControl>
              <InputLabel>Alignment</InputLabel>
              <Input fullWidth placeholder="Alignment" />
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Race</InputLabel>
              <Input fullWidth placeholder="Race" />
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Sex</InputLabel>
              <Input fullWidth placeholder="Sex" />
            </FormControl>
          </Grid>
        </Grid>

        <Grid>
          <FormControl>
            <InputLabel>Description</InputLabel>
            <Input fullWidth placeholder="Description" />
          </FormControl>
        </Grid>

        <Grid item xs>
          <TextField
            id="sex"
            select
            label="Sex"
            value={sex}
            onChange={handleSexChange}
            helperText="Select characer sex"
          >
            {sexes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs>
          <TextField
            id="character-alignment"
            select
            label="Alignment"
            value={alignment}
            onChange={handleAlignmentChange}
            helperText="Select Alignment"
          >
            {alignments.map((res, index) => (
              <MenuItem key={`alignment-${index}`} value={res.value}>
                {res.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Paper>
    </div>
  );
}
