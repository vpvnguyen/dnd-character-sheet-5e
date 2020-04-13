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
              <div>Hit Dice</div>
              <div>Death Saves</div>
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
            <Paper className={classes.paper}>Inspiration</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Proficiency Bonus</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Passive Wisdom (Perception)</div>
              <div>Other Profs & Languages notes section</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4>Attacks and Spellcasting</h4>
              <div>Name | ATK Bonus | Damage/Type</div>
              <div>Notes section</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <h4>Equipment</h4>
              <div>CP</div>
              <div>SP</div>
              <div>EP</div>
              <div>GP</div>
              <div>PP</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Personality Traits</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Ideals</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Bonds</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Flaws</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <div>Features & Traits</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
