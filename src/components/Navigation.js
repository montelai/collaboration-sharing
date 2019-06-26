import React from "react";
import {
  AppBar,
  Menu,
  MenuItem,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: "5px",
    color: "white"
  },
  title: {
    flexGrow: 1
  }
}));
export default function Navigation() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" className={classes.title}>
          Notes Collaboration App
        </Typography>
        <IconButton />
      </Toolbar>
    </AppBar>
  );
}
