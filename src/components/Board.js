import React, { Component } from "react";
import { Grid, Card, CardContent, Typography, TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import AddCircle from "@material-ui/icons/AddCircle";
import RemoveCircle from "@material-ui/icons/RemoveCircle";
import {connect} from 'react-redux';
import compose from 'recompose/compose';

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

  state = {
    isAdding : false,
    content:''
  }

  addItemToBoard = () => {
    this.setState ({
      isAdding:true
    })
  }

  addItemToBoardForm = () => {
    return <form autoComplete='off'>
            <CardContent>
              <form>
                <TextField 
                  label='Enter Note' 
                  value={this.state.content}
                  onChange={(event)=>this.setState({content: event.target.value})}
                />
              </form>   
            </CardContent>
            <Grid styles={{justifyContent:'space-around'}}>
              <Button 
                variant='contained' 
                color='primary'
                onClick={()=>{
                  this.props.addItem(this.state.content)
                  this.setState({isAdding: false, content:''})
                }}>Add</Button> 
              <Button 
                variant='contained' 
                color='secondary' 
                onClick={()=>{
                  this.setState({isAdding: false, content:''})
                }}>Cancel</Button>
            </Grid>
            
      </form>
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid className={classes.boardItem}>
        <Grid className={classes.boardItemButtons}>
          <AddCircle
            className={classes.addIcon}
            onClick={this.addItemToBoard}
          />
          <RemoveCircle 
            className={classes.removeIcon} 
            onClick={()=> {console.log("clicked");}}/>
        </Grid>
        <Typography>
          {this.props.title ? this.props.title : "Enter a Title"}
        </Typography>
        <Card className={classes.boardItemContents}>
          <CardContent>test 1 </CardContent>
          {this.state.isAdding ? 
            this.addItemToBoardForm()
            : null }
        </Card>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (content) => dispatch({type:'ADD_ITEM', content: content})
  }

}

export default compose(
  withStyles(styles),
  connect(null,mapDispatchToProps))(Board);
