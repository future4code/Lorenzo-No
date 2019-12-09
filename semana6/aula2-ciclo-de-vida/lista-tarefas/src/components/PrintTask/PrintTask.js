import React from 'react';

class PrintTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  onClickTask = () => {
    this.props.changeTaskStatus(this.props.printID)
  }

  render() {
    console.log(this.props.taskNome)
    return(
      <li onClick={this.onClickTask}>{this.props.taskNome}</li>
    );
  }
}

export default PrintTask;