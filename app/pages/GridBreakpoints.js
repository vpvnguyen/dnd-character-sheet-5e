import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Character Header</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              Class, Level, Background, Player Name, Faction, Race, Alignment,
              Exp
            </Paper>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Paper className={classes.paper}>
              <h4>Stats</h4>
              <div>str</div>
              <div>dex</div>
              <div>Const</div>
              <div>Intel</div>
              <div>Wis</div>
              <div>Char</div>
            </Paper>
          </Grid>

          <Grid item xs={8} sm={3}>
            <Paper className={classes.paper}>
              <h4>Skills</h4>
              <div>Acrobatics</div>
              <div>Animal Handling</div>
              <div>Arcana</div>
              <div>Athletics</div>
              <div>Deception</div>
              <div>History</div>
              <div>Insight</div>
              <div>Intimidation</div>
              <div>Investigation</div>
              <div>Medicine</div>
              <div>Nature</div>
              <div>Perception</div>
              <div>Performance</div>
              <div>Persuasion</div>
              <div>Religion</div>
              <div>Sleight of Hand</div>
              <div>Stealth</div>
              <div>Survival</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <h4>Primary</h4>
              <div>Armor Class</div>
              <div>Initiative</div>
              <div>Speed</div>
              <div>HP</div>
              <div>Temp HP</div>
              <div>Hit Dice / Save Throws</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <h4>Primary</h4>
              <span>some1</span>
              <span>some2</span>
              <span>some3</span>
              {/* <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>Armor Class</div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>Initiative</div>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper className={classes.paper}>
                  <div>Speed</div>
                </Paper>
              </Grid> */}
            </Paper>
          </Grid>

          <Grid item xs={12} sm={3}>
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
      </Container>
    </div>
  );
}
