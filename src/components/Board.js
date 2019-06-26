import React from "react";
import { Grid, Card, Typography } from "@material-ui/core";

export default function Board(props) {
  return (
    <Grid xs={6} sm={4} lg={3} className="BoardItem">
      <Card>
        <Typography variant="h5">
          {props.title ? props.title : "Enter a Title"}
        </Typography>
        <h1>testtest</h1>
      </Card>
    </Grid>
  );
}
