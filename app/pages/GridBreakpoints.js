import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Character Header</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <div>Armor Class</div>
            <div>Initiative</div>
            <div>Speed</div>
            <div>HP</div>
            <div>Temp HP</div>
            <div>Hit Dice / Save Throws</div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Paper className={classes.paper}>
            <div>str</div>
            <div>dex</div>
            <div>Const</div>
            <div>Intel</div>
            <div>Wis</div>
            <div>Char</div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Paper className={classes.paper}>
            <div>str</div>
            <div>dex</div>
            <div>Const</div>
            <div>Intel</div>
            <div>Wis</div>
            <div>Char</div>
          </Paper>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Paper className={classes.paper}>
            <h4>Saving Throws</h4>
            <div>str</div>
            <div>dex</div>
            <div>Const</div>
            <div>Intel</div>
            <div>Wis</div>
            <div>Char</div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
