import { Grid } from "@material-ui/core";
import Board from "./Board";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
  Board: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    margin: "10px",
    padding: "10px",
    width: "100%",
    overflowX: "hidden"
  }
});

export default function Boards(props) {
  const classes = styles();

  return (
    <Grid className={classes.Board}>
      {props.boards.length === 0 ? (
        <Board new={true} />
      ) : (
        props.boards.map(board => {
          return <Board new={false} data={{}} />;
        })
      )}
    </Grid>
  );
}
