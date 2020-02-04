import React, { Component } from "react";
import { BackgroundColor, ImageCapa, LoginArea, Title, InputText, InputPassword, Link, ButtonLight } from "../../style/LoginPage"
import LogoImg from "../../img/logocortado.png"
import PessoasImg from "../../img/pessoas.png"
import { connect } from "react-redux";
import { login } from "../../actions/login"
import { push } from "connected-react-router";
import { routes } from "../Router";

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
    }
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token")
    if (token !== null) {
      this.props.goToFeedPage()
    }
  }

  handleFieldChange = el => {
    this.setState({
      [el.target.name]: el.target.value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { email, password } = this.state

    await this.props.login(email, password)
  }

  render() {
    const { email, password } = this.state

    return (
      <BackgroundColor>
        <ImageCapa src={LogoImg} />
        <LoginArea onSubmit={this.handleSubmit}>
          <Title>Login</Title>
          <InputText onChange={this.handleFieldChange} name="email" value={email} id="filled-basic" label="E-mail" type="email" variant="filled" margin="dense" />
          <InputPassword onChange={this.handleFieldChange} name="password" value={password} id="filled-password-input" label="Senha" type="password" variant="filled" autoComplete="current-password" margin="dense" />
          <Link onClick={this.props.goToSignUpPage}>Não sou cadastrado</Link>
          <ButtonLight type="submit">Entrar</ButtonLight>
        </LoginArea>
        <ImageCapa src={PessoasImg} />
      </BackgroundColor>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToFeedPage: () => dispatch(push(routes.feed)),
  goToSignUpPage: () => dispatch(push(routes.signUp)),
})

export default connect(null, mapDispatchToProps)(LoginPage)