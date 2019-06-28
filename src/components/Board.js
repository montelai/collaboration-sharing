import React, { Component } from "react";
import { Grid, Card, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";

const styles = {
  boardItem: {
    width: "270px",
    display: "inline-block",
    overflowY: "auto",
    backgroundColor: "#e2e4e6",
    boxShadow: "5px 10px  rbga(0,0,0,0.5)",
    borderRadius: "3px",
    verticalAlign: "top",
    padding: "5px",
    paddingBottom: "20px"
  },
  boardItemContents: {},
  boardItemButtons: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px, 5px, 0px, 5px"
  },
  addIcon: {
    color: "green",
    margin: "3px"
  },
  removeIcon: {
    color: "red",
    margin: "3px"
  }
};

class Board extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid xs={6} sm={4} lg={3} className={classes.boardItem}>
        <Grid className={classes.boardItemButtons}>
          <AddCircle
            className={classes.addIcon}
            onClick={() => {
              console.log("clicked");
            }}
          />
          <RemoveCircle className={classes.removeIcon} />
        </Grid>
        <Typography>
          {this.props.title ? this.props.title : "Enter a Title"}
        </Typography>
        <Card className={classes.boardItemContents}>
          <h1>testtest</h1>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(Board);
