import React, { Component } from "react";
import "./App.css";
import { Container } from "@material-ui/core";
import Boards from "./components/Boards";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import collaborationApp from "./reducers/reducer";

class App extends Component {
  //sample board
  // {
  //   title:'',
  //   content:'',
  //   id:'',
  //   author:''
  // }

  state = {
    isLoading: true,
    boards: []
  };

  render() {
    return (
      <Container
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0079bf",
          alignItems: "center"
        }}
      >
        <Navigation />
        <Boards boards={[]} />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.boards
  };
};

export default connect(mapStateToProps)(App);
