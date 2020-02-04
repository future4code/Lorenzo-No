import React from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import days from "./days";
import Button from '@material-ui/core/Button';
import { TaskSection } from "../../style/theme";
import Weekday from "./weekday";
import { getTasks, createTask } from "../../actions/planner";
import { connect } from "react-redux";

class Planner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: {
        text: "",
        day: ""
      }
    }
  }

  componentDidMount() {
    this.props.getTasks()
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ task: { ...this.state.task, [name]: value } })
  }

  submitTask = () => {
    const { task } = this.state;
    if (task.day === "") {
      window.alert("Favor selecionar um dia.")
    } else {
      this.props.createTask(task)
      this.setState({ task: { ...this.state.task, text: "" } })
    }
  }

  render() {
    return (
      <div>
        <section>
          <TextField name="text" type="text" variant="outlined" label="Tarefa" placeholder="Nova tarefa" value={this.state.task.text} onChange={this.handleChange} />
          <FormControl variant="outlined">
            <InputLabel htmlFor="day">Dia</InputLabel>
            <Select input={<OutlinedInput labelWidth={this.state.labelWidth} name="day" id="day" />} value={this.state.task.day} onChange={this.handleChange}>
              <MenuItem value="" disabled>Escolha um dia</MenuItem>
              {days.map(day => (<MenuItem name="day" value={day}>{day}</MenuItem>))}
            </Select>
          </FormControl>
          <Button variant="contained" color="primary" onClick={this.submitTask}>Criar</Button>
        </section>
        <TaskSection>
          {days.map(day => (<Weekday weekday={day} allTasks={this.props.allTasks} />))}
        </TaskSection>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  allTasks: state.planner.allTasks
})

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => dispatch(getTasks()),
  createTask: (task) => dispatch(createTask(task))
})

export default connect(mapStateToProps, mapDispatchToProps)(Planner);