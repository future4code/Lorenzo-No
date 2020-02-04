import axios from "axios";

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-lorenzono";

export const getTasks = () => async (dispatch) => {
  try {
    const response = await axios.get(`${baseUrl}`)
    dispatch(setTasks(response.data))
  } catch {
    window.alert("Erro ao acessar as tarefas.");
  }
}

export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  payload: {
    tasks
  }
})

export const createTask = (task) => async (dispatch) => {
  try {
    await axios.post(`${baseUrl}`, task);
    dispatch(getTasks());
  } catch {
    window.alert("Erro ao criar a tarefa.");
  }
}