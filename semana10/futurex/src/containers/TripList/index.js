import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

class TripList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <p onClick={this.props.goToSomewhere}>oi</p>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  goToSomewhere: () => dispatch(push('/'))
})

export default connect(null, mapDispatchToProps)(TripList)