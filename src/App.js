import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Boards from "./components/Boards";
import Navigation from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <Container className="App" style={{ backgroundColor: "#1f2631" }}>
        <Navigation />
        <Boards boards={[]} />
      </Container>
    );
  }
}
