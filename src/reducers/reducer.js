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
      console.log(action)
      const newItem = {
        id: state.boards[action.id].content.length,
        task: action.content
      }
      return {
        ...state, 
        boards: {
          ...state.boards,
          [action.id] : {
            ...state.boards[action.id],
            content: [...state.boards[action.id].content, newItem]
          }
        }
      }
      // return Object.assign({}, state, {
      //   boards : {...state.boards, action.id }
      // });

    case REMOVE_ITEM:
      const filtered = state.boards.filter(id => id);
      return Object.assign({}, state, {
        boards: [...filtered]
      });

    case EDIT_ITEM:
      const updatedItems = state.map(item => {
        if (item.id === action.id) {
          return { ...item, ...action.content };
        }
        return item;
      });

      return Object.assign({}, state, {
        boards: [...state.boards, ...updatedItems]
      });

    default:
      return state;
  }
}

export default collaborationApp;
