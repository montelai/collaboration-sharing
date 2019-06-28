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
          task: 'Sunt id eiusmod ex voluptate occaecat irure id laboris duis sint. Elit amet in sint eu ea aliquip pariatur minim ut dolor sunt non. Dolore ad aliquip reprehenderit est adipisicing est proident est deserunt. Est sunt eu proident exercitation amet eu labore ut sint fugiat aliqua sint aliquip pariatur. Sunt excepteur irure officia nostrud cupidatat duis aute veniam laborum proident nisi aliquip. Consectetur cupidatat nisi ea est eu."'
        },
      ]
    },
  ongoingBoard: 
    {
      title: "Ongoing",
      content:[]
    },

  completedBoard : 
    {
      title: "Completed",
      content:[]
    }},
  customBoard: [],
  isLoading: true
};

function collaborationApp(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:

      console.log(action)
      //sample board
      // {
      //   title:'',
      //   content:'',
      // }
      return Object.assign({}, state, {
        boards: [
          ...state.boards,
          {
            title: action.title,
            content: action.content
          }
        ]
      });

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
