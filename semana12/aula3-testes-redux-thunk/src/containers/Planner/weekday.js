import React from "react";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from "react-redux";

function Weekday(props) {
  const byDay = task => {
    return task.day === props.weekday
  }

  return (
    <div>
      <Typography variant="h6">
        {props.weekday}
      </Typography>
      <List>
        {props.allTasks && props.allTasks.filter(byDay).map(task => (
          <ListItem button key={task.id}>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default connect()(Weekday);