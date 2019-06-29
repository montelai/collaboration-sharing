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
    isEditing : false,
    editMode: false,
    content:'',
    id:'',
    hovering: false,
    boardName: this.props.boardName
  }

  //Show UI Options//

  //shows the add button
  showAdd = () => {
    return this.state.isAdding ? 
            this.addItemToBoardForm()
            : null 
  }

  //show the edit button
  showEdit = (value) => {

    

    return (this.state.isEditing && (this.state.id == value.id))?
            
    <CardContent style={{'display':'flex', 'justifyContent':'space-evenly'}}>
      <Button variant='contained' style={{'backgroundColor':'#4088c6'}} onClick={()=> {this.setState({editMode:!this.state.editMode, isEditing:!this.state.isEditing})}}>Edit</Button>
      <Button variant='contained' color='secondary' onClick={this.deleteItem} disabled={value.id === 0 ? true : false }>Delete</Button></CardContent>
      : null
  }


  //helper function to show edit and delete button when clicked
  editItem = (event) => {
    // console.log(event, event.target)
    // console.log(event.target.className)
    const id = (event.target.id)
    let content = this.getEditContentValue(id)

    if (event.target.className === 'MuiTypography-root MuiTypography-body1'){
      this.setState({
        isEditing: !this.state.isEditing,
        id: event.target.id,
        content: content
      })
    }
    
  }

  deleteItem = () => {
    this.props.removeItem(this.state.id, this.state.boardName )
  }

  //helper function to show add button
  addItemToBoard = (event) => {

    const id = this.props.data[this.props.data.length-1].id+1

    this.setState ({
      isAdding:true,
      boardName: this.props.boardName,
      id: id
    })
  }

  //helper function used to add a new task in the board
  addItemToBoardForm = (event) => {
    return <Card style={{'marginTop':'10px'}}>
      <form autoComplete='off' style={{'paddingTop':'10px', 'paddingBottom':'10px'}}>
            <CardContent>
              <form>
                <TextField 
                  label='Add new task' 
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
                  this.props.addItem(this.state.content, this.state.id, this.state.boardName)
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
      </Card>
  }

  getEditContentValue = (id) => {

    let content;
    this.props.data.map(item => {
      if (item.id === parseInt(id)){
        content = item.task
      }
    })
    return content
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
        </Grid>
        <Typography>
          {this.props.title ? this.props.title : "Enter a Title"}
        </Typography>
        {this.props.data.length < 1 ? 
          <Card className={classes.boardItemContents}>
            <CardContent/>
          </Card>
          : null}

        {this.props.data.map((value, index) => {
          return <Card 
                    className={classes.boardItemContents} 
                    style={{'marginTop':'5px'}}
                    id={value.id}
                    >
          <CardContent style={{'overflowWrap':'break-word'}} onClick={this.editItem} id={value.id}>
            {(this.state.editMode && (this.state.id==value.id)) ?
            <form autoComplete='off' style={{'paddingTop':'10px', 'paddingBottom':'10px'}}>
              <CardContent>
                <form>
                  <TextField  
                    label={'Edit task' }
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
                    this.props.editItem(this.state.content, this.state.id, this.state.boardName)
                    this.setState({isEditing: !this.state.isEditing, content:'', editMode: !this.state.editMode})
                  }}>Confirm</Button> 
                <Button 
                  variant='contained' 
                  color='secondary' 
                  onClick={()=>{
                    this.setState({isEditing: !this.state.isEditing, editMode:!this.state.editMode})
                  }}>Cancel</Button>
              </Grid>
              
            </form>
            :
            <Typography 
              id={value.id}
              style={{
                'textAlign':'start', 
                'textOverflow':'string', 
                'justifyContent':'flex-start'}}>
                {value.task}
              </Typography>}
            </CardContent>

            {/* //edit and delete functionality */}
            { this.showEdit(value)}
          </Card> 
        })}
          {this.showAdd()}
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (content, id, boardName) => dispatch({type:'ADD_ITEM', content: content, id:id, boardName:boardName}),
    removeItem: (id, boardName) => dispatch({type:'REMOVE_ITEM', id:id, boardName: boardName}),
    editItem: (content, id, boardName) => dispatch({type:'EDIT_ITEM', id:id, boardName:boardName, content:content})
  }

}

export default compose(
  withStyles(styles),
  connect(null,mapDispatchToProps))(Board);
