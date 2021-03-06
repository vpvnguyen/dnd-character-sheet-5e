import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// components
import CharHeader from "../components/CharSheet/CharHeader";
import CharAttributes from "../components/CharSheet/CharAttributes";
import CharSkills from "../components/CharSheet/CharSkills";
import CharHP from "../components/CharSheet/CharHP";
import CharAtk from "../components/CharSheet/CharAtk";
import CharSavingThrows from "../components/CharSheet/CharSavingThrows";
import CharProf from "../components/CharSheet/CharProf";
import CharTraits from "../components/CharSheet/CharTraits";
import CharEquip from "../components/CharSheet/CharEquip";
import CharFeats from "../components/CharSheet/CharFeats";

// test
import CharHP2 from "../components/CharSheet/CharHP2";

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
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <CharHeader />
            </Paper>
          </Grid>

          <Grid item xs={4} sm={2}>
            <Paper className={classes.paper}>
              <CharAttributes />
            </Paper>
          </Grid>

          <Grid item xs={8} sm={5}>
            <Paper className={classes.paper}>
              <h4>Skills</h4>
              <CharSkills />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <h4>Saving Throws</h4>
              <CharSavingThrows />
            </Paper>
          </Grid>

          {/* HP */}
          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
              <h4>Primary</h4>
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
            </Paper>
          </Grid>

          {/* HP */}
          <Grid item xs={12} sm={7}>
            <Paper className={classes.paper}>
              <h4>Primary</h4>
              <CharHP2 />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <h4>Attacks and Spellcasting</h4>
              <div>Name | ATK Bonus | Damage/Type</div>
              <div>Notes section</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <h4>Equipment</h4>
              <div>CP</div>
              <div>SP</div>
              <div>EP</div>
              <div>GP</div>
              <div>PP</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>Inspiration</Paper>
            <Paper className={classes.paper}>Proficiency Bonus</Paper>
            <Paper className={classes.paper}>Passive Wisdom (Perception)</Paper>
            <Paper className={classes.paper}>
              <div>Other Profs & Languages notes section</div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <div>Personality Traits</div>
            </Paper>
            <Paper className={classes.paper}>
              <div>Ideals</div>
            </Paper>
            <Paper className={classes.paper}>
              <div>Bonds</div>
            </Paper>
            <Paper className={classes.paper}>
              <div>Flaws</div>
            </Paper>
            <Paper className={classes.paper}>
              <div>Features & Traits</div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
