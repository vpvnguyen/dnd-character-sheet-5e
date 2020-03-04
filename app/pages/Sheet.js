import React from "react";
import {
  Container,
  Grid,
  Card,
  InputLabel,
  Input,
  FormControl
} from "@material-ui/core";

export default function Sheet() {
  return (
    <Container>
      <Grid>
        <Card>
          <FormControl>
            <InputLabel>Character Name</InputLabel>
            <Input fullWidth placeholder="Character Name" />
          </FormControl>

          <FormControl>
            <InputLabel>Class</InputLabel>
            <Input fullWidth placeholder="Class" />
          </FormControl>

          <FormControl>
            <InputLabel>Level</InputLabel>
            <Input fullWidth placeholder="level" />
          </FormControl>

          <FormControl>
            <InputLabel>Alignment</InputLabel>
            <Input fullWidth placeholder="alignment" />
          </FormControl>

          <FormControl>
            <InputLabel>Race</InputLabel>
            <Input fullWidth placeholder="race" />
          </FormControl>

          <FormControl>
            <InputLabel>Sex</InputLabel>
            <Input fullWidth placeholder="sex" />
          </FormControl>

          <FormControl>
            <InputLabel>Desc</InputLabel>
            <Input fullWidth placeholder="desc" />
          </FormControl>
        </Card>
      </Grid>
    </Container>
  );
}
