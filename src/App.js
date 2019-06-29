import React, { Component } from "react";
import "./App.css";
import { Container, Typography, Grid, Button, Drawer, List, ListItem} from "@material-ui/core";
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

  state = {
    drawerOpen: false
  }


  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  renderDrawer = ()  => {
    return <Drawer open='left' onClose={this.toggleDrawer}>
      <List>
        <ListItem key='creator' style={{'display':'flex','alignSelf':'center'}}>
          <Typography>Created By Monte Lai</Typography>
        </ListItem>
        <ListItem key='github'>
        <Button style={{'margin':'10px'}} variant='contained' href='https://github.com/montelai/collaboration-sharing'>Source Code</Button>
        </ListItem>
        <ListItem key='email'>
        <Button style={{'margin':'10px'}} variant='contained' href='mailto:montelai@gmail.com'>Contact Me</Button>
        </ListItem>
        <ListItem key='portfolio'>
        <Button style={{'margin':'10px'}} variant='contained' href='https://montelai.github.io'>Check out my portfolio</Button>
        </ListItem>
      </List>
    </Drawer>
  }

  componentDidMount(){
    console.log('Welcome, thanks for using this Trello Clone App')

  }

  render() {
    return (
      <Grid
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0079bf",
          alignItems: "center",
          height:'100vh'
        }}
      >
        <Navigation toggleDrawer={this.toggleDrawer}/>
        {this.state.drawerOpen ? this.renderDrawer() : null}
        <Boards boards={this.props.boards} />
        {/* <Typography>Created by Monte Lai</Typography>
        <Grid style={{'display':'flex'}}>
          <Button style={{'margin':'10px'}} variant='contained' href='https://montelai.github.io'>Check out my portfolio</Button>
          <Button style={{'margin':'10px'}} variant='contained' href='https://github.com/montelai/collaboration-sharing'>Source Code</Button>
          <Button style={{'margin':'10px'}} variant='contained' href='mailto:montelai@gmail.com'>Contact Me</Button>
        </Grid> */}
        
      </Grid>
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
