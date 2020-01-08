import React from "react";
import Button from "../../components/Button";
import { changeLanguageAction } from "../../actions/language";
import { connect } from "react-redux";

export const LanguageChooser = props => {
  return (
    <div>
      <Button onClick={() => props.changeLanguage("pt-br")}>Português</Button>
      <Button onClick={() => props.changeLanguage("en")}>Inglês</Button>
      <Button onClick={() => props.changeLanguage("es")}>Espanhol</Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    changeLanguage: language => dispatch(changeLanguageAction(language))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LanguageChooser);
