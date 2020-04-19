import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const CharHP2 = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        xs={12}
      >
        <Grid item xs={4}>
          <Paper className={classes.paper}>Armor Class</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Initiative</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>Speed</Paper>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>HP</Paper>
      </Grid>

      <Grid item xs={12}>
        <Paper className={classes.paper}>Temp HP</Paper>
      </Grid>

      <Grid
        item
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        xs={12}
      >
        <Grid item xs={6}>
          <Paper className={classes.paper}>Hit Dice</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>Death Saves</Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CharHP2;
