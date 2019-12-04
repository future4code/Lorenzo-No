import React from 'react';
import './App.css';
import PrintTask from './components/PrintTask/PrintTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      taskList: [],
    }
  }

  onChangeTask = (e) => {
    this.setState({task: e.target.value})
  }

  onClickAdd = (e) => {
    const newTask = {
      taskName: this.state.task,
      taskWasDone: false,
      taskID: Date.now()
    }
    const taskListCopy = [...this.state.taskList, newTask]
    this.setState({
      taskList: taskListCopy,
      task: '',
    })
  }

  changeTaskStatus = (taskID) => {
    const listCopy = this.state.taskListCopy.map(eachTask => {
      if (eachTask.id === taskID) {
        const taskCopy = {...eachTask};

      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Lista de Tarefas</h2>
        </header>
        <main>
          <section>
            <input type='text' value={this.state.task} onChange={this.onChangeTask}/>
            <button onClick={this.onClickAdd}>Adicionar</button>
          </section>
          <section>
            <ul>
              {this.state.taskList.map(eachTask => {
                return (
                  <PrintTask taskNome={eachTask.taskName} changeTaskStatus={this.changeTaskStatus}/>
                )
              })}
            </ul>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
