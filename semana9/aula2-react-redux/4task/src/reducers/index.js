import { combineReducers } from "redux";
import languages from "./languages";
import planets from "./planets";
import tasks from './tasks';

const rootReducer = combineReducers({
  languages: languages,
  planets: planets,
  tasks: tasks
});

export default rootReducer;
