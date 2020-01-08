const initialState = {
  taskList: []
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [ ...state, {
        id: Date.now(),
        taskName: action.payload.taskName,
        completed: false }];
    default:
      return state;
  }
};

export default tasks;
