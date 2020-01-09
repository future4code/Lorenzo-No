import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    }
  }

  render() {
    return (
      <div>
        <input placeholder='O que é que tem que ser feito agora?' onChange={(e) => {this.setState({task: e.target.value})}} value={this.state.task}/>
        <button onClick={() => props.addTask(this.state.task)}>Ok</button>
      </div>
    )
  }
}