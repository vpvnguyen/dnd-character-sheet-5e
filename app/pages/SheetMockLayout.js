import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    // whiteSpace: "nowrap", // allows text to flow outside of component; will lose responsive layout if text flows out of media query
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      {/* Header */}
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>Character Name</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            Class, Level, Background, Player Name, Faction, Race, Alignment, Exp
          </Paper>
        </Grid>

        <Divider className={classes.divider} />

        {/* Col 1 */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          xs={2}
        >
          <Paper className={classes.paper}>
            <div>Str</div>
            <div>Dex</div>
            <div>Dex</div>
            <div>Const</div>
            <div>Intel</div>
            <div>Wis</div>
            <div>Char</div>
          </Paper>
        </Grid>

        {/* Col 2 */}
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="stretch"
          xs={2}
        >
          {/* Inspiration & Prof Bonus */}
          <Paper className={classes.paper}>Inspiration</Paper>
          <Paper className={classes.paper}>Proficiency Bonus</Paper>
          <Paper className={classes.paper}>
            <h3>Saving Throws</h3>
            <div>Str</div>
            <div>Dex</div>
            <div>Const</div>
            <div>Intel</div>
            <div>Wis</div>
            <div>Char</div>
          </Paper>

          {/* Skills */}
          <Paper className={classes.paper}>
            <h3>Skills</h3>
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
            <div>Sleight of Hand </div>
            <div>Stealth</div>
            <div>Survival</div>
          </Paper>
        </Grid>

        {/* Col 3 */}
        {/* Stats */}
        <Grid
          item
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          xs={4}
        >
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={3}
          >
            <Paper className={classes.paper}>
              <div>Armor Class</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={3}
          >
            <Paper className={classes.paper}>
              <div>Initiative</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={3}
          >
            <Paper className={classes.paper}>
              <div>Speed</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={12}
          >
            <Paper className={classes.paper}>
              <div>HP</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={12}
          >
            <Paper className={classes.paper}>
              <div>Temp HP</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={6}
          >
            <Paper className={classes.paper}>
              <div>Hit Dice</div>
            </Paper>
          </Grid>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="stretch"
            xs={6}
          >
            <Paper className={classes.paper}>
              <div>Death Saves</div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
