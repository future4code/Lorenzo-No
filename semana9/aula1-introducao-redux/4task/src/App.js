import React from 'react';
import TaskList from './components/TaskList'
import { createStore } from 'redux';

const inicialState = {
  taskList: []
}

const appReducer = (state = inicialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {}
    case 'CHANGE_STATUS':
      return {}
    case 'CHANGE_ALL_TO_DONE':
      return {}
    case 'FILTER_TASKS':
      return {}
    case 'DELETE_TASK':
      return {}
    case 'DELETE_ALL_TASKS':
      return {}
    default:
      return state
  }
}

function addTask(taskName) {
  return {
    type: 'ADD_TASK',
    payload: taskName
  }
}

function changeStatus() {
  return {
    type: 'CHANGE_STATUS'
  }
}

function changeAllTasksToDone() {
  return {
    type: 'CHANGE_ALL_TO_DONE'
  }
}

function filterTasks() {
  return {
    type: 'FILTER_TASKS'
  }
}

function deleteTask() {
  return {
    type: 'DELETE_TASK'
  }
}

function deleteAllTasks() {
  return {
    type: 'DELETE_ALL_TASKS'
  }
}

const store = createStore(appReducer);

function App(props) {
  return (
    <div>
      4TASK
      <br />
      <input placeholder='O que tem que ser feito?' />
      <TaskList />
      Marcar todas como completas
      Todas Pendentes Completas
      Remover completas
    </div>
  );
}

export default App;