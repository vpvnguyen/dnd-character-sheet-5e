import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import {
  Typography,
  Divider,
  InputLabel,
  Input,
  FormControl
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
    margin: "20px"
  }
}));

export default function Sheet() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1" gutterBottom>
          Character Sheet 5e
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={3}>
          <Grid item>
            <Avatar>A</Avatar>
          </Grid>

          <Grid item xs>
            <FormControl>
              <InputLabel>Character Name</InputLabel>
              <Input fullWidth placeholder="Character Name" />
            </FormControl>
          </Grid>
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

        <Grid item xs>
          <FormControl>
            <InputLabel>Description</InputLabel>
            <Input fullWidth placeholder="Description" />
          </FormControl>
        </Grid>
      </Paper>
    </div>
  );
}
