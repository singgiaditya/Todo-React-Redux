let initialState = {
  todo: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: false },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    case "COMPLETE_TODO":
      let updateTodo = state.todo.map((t) => {
        if (t.id === action.payload) {
          return { ...t, completed: !t.completed };
        } else {
          return t;
        }
      });
      return { ...state, todo: updateTodo };
      case "DELETE_TODO":
        let updateDeleteTodo = state.todo.filter((todo) => todo.id !== action.payload);
        return {
          ...state,
          todo: updateDeleteTodo,
        };
    default:
      return state;
  }
};

export default todoReducer;
