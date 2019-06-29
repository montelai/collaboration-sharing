import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  menuButton: {
    marginRight: "5px",
    color: "white"
  },
  title: {
    flexGrow: 1
  }
}));
export default function Navigation(props) {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="Menu"
        >
          <MenuIcon onClick={props.toggleDrawer}/>
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Notes Collaboration App
        </Typography>
        <IconButton />
      </Toolbar>
    </AppBar>
  );
}
