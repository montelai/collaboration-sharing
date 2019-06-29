import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "../actions/actions";


// initial state

const initialState = {
  boardId : [0,1,2],
  boards: {todoBoard: 
    {
      title: "Todo",
      content: [
        {
          id: 0,
          task: 'Welcome to Monte\'s Trello Clone'
        },
      ]
    },
  ongoingBoard: 
    {
      title: "Ongoing",
      content:[{id:0, task:'Built with React and Redux'}]
    },

  completedBoard : 
    {
      title: "Completed",
      content:[{id:0, task:'Source Code at https://github.com/montelai/collaboration-sharing'}]
    }}, 
  customBoard: [],
  isLoading: true
};

function collaborationApp(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:

      console.log(action)
      // console.log('length', state.boards[action.boardName].content.length-1)
      const newItem = {
        id: state.boards[action.boardName].content[state.boards[action.boardName].content.length-1].id + 1,
        task: action.content
      }
      return {
        ...state, 
        boards: {
          ...state.boards,
          [action.boardName] : {
            ...state.boards[action.boardName],
            content: [...state.boards[action.boardName].content, newItem]
          }
        }
      }

    case REMOVE_ITEM:
      console.log(action)
      const filtered = state.boards[action.boardName].content.filter(item => item.id !== action.id);
      return {
        ...state,
        boards: {
          ...state.boards,
          [action.boardName]: {
            ...state.boards[action.boardName],
            content: [...filtered]
          }
        }
      }


    case EDIT_ITEM:
      console.log(action)
      // let updatedItems = {id: action.id, content: action.content}
      
      // state.boards[action.boardName].content.map(item => {

      //     if (item.id === action.id) {
      //       return { id: action.id, content:[action.content] }
      //     }
      //   });

      // console.log(updatedItems)

      const newContent = [...state.boards[action.boardName].content]
      newContent[action.id].task = action.content
      console.log (newContent[action.id])
      

      return {
        ...state,
          boards: {
            ...state.boards,
            [action.boardName]:{
              ...state.boards[action.boardName],
              content: [...newContent],
              
            }
          }
      }

    default:
      return state;
  }
}

export default collaborationApp;
