import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const Buttons = styled.section`
  display: flex;
`

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="text-button-file"
        multiple
        type="file"
      />
      <label htmlFor="text-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

function HomePage(props) {

  Oi = () => {
    withStyles(styles)(TextButtons)
  }

  return (
    <div>
      <Buttons>
        <Button onClick={props.goToTripList}>Partiu rolê</Button>
        <Button onClick={props.goToLoginPage}>Agitar um rolê</Button>
      </Buttons>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  goToTripList: () => dispatch(push('/trips/list')),
  goToLoginPage: () => dispatch(push('/login')),
})

export default connect(null, mapDispatchToProps)(HomePage);