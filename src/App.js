import React, { Component } from "react";
import "./App.css";
import { Container, Typography, Link } from "@material-ui/core";
import Boards from "./components/Boards";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";

class App extends Component {
  //sample board
  // {
  //   title:'',
  //   content:'',
  //   id:'',
  //   author:''
  // }

  componentDidMount(){

  }

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
        <Boards boards={this.props.boards} />
        <Typography>Created by Monte Lai</Typography>
        <Typography>Source Code: <a href='https://github.com/montelai/collaboration-sharing'>https://github.com/montelai/collaboration-sharing</a></Typography>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    boardId: state.boardId,
    boards: state.boards,
    isLoading:state.isLoading
  };
};

export default connect(mapStateToProps)(App);
