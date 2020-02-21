const initialState = {
  allTasks: []
}

const planner = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS":
      const taskList = action.payload.tasks;
      return { ...state, allTasks: taskList };
    default:
      return state;
  }
}

export default planner;