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
    borderRadius: "10px",
    verticalAlign: "top",
    padding: "5px",
    paddingBottom: "20px",
    margin: "10px"
  },
  boardItemContents: {},
  boardItemButtons: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0px, 5px, 0px, 5px"
  },
  addIcon : {
    color: "#5aac44",
    margin: "3px",
    '&:hover' : {
      color: "#52e02a",
      margin: "3px"
    }
  },
  removeIcon: {
    color: "red",
    margin: "3px"
  }
};

class Board extends Component {

  state = {
    isAdding : false,
    content:'',
    key:''
  }

  addItemToBoard = (event) => {
    console.log(event.target)
    this.setState ({
      isAdding:true,
      key: this.props.id
    })
  }

  addItemToBoardForm = () => {
    return <form autoComplete='off' style={{'paddingTop':'10px', 'paddingBottom':'10px'}}>
            <CardContent>
              <form>
                <TextField 
                  label='Enter Note' 
                  value={this.state.content}
                  onChange={(event)=>this.setState({content: event.target.value})}
                />
              </form>   
            </CardContent>
            <Grid style={{'justifyContent':'space-evenly', 'display':'flex'}}>
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

  componentDidMount(){
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
          {/* <RemoveCircle 
            className={classes.removeIcon} 
            onClick={()=> {console.log("clicked");}}/> */}
        </Grid>
        <Typography>
          {this.props.title ? this.props.title : "Enter a Title"}
        </Typography>
        <Card className={classes.boardItemContents}>
          <CardContent></CardContent>
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
