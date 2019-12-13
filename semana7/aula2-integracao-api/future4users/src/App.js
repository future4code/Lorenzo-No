import React from 'react';
import axios from 'axios';
import './App.css';

const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api';
const token = 'lorenzo-no-1912106'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      mainScreen: true,
      users: '',
    }
  }

  changeScreen = () => {
    this.setState({mainScreen: !this.state.mainScreen})
  }

  onUsernameChange = ev => {
    this.setState({username: ev.target.value})
  }

  onEmailChange = ev => {
    this.setState({email: ev.target.value})
  }
  
  createUser = () => {
    const url = `${baseUrl}/users/createUser`

    const data = {
      name: this.state.username,
      email: this.state.email
    }

    const request = axios.post(url, data, {
      headers: {
        'api-token': token
      }
    })

    request.then(response => {
      alert('Usuário cadastrado!')
      this.setState({
        username: '',
        email: ''
      })
    }).catch(error => {
      alert(error.message);
    })
  }

  getAllUsers = () => {
    const url = `${baseUrl}/users/getAllUsers`

    const request = axios.get(url, {
      headers: {
        'api-token': token
      }
    })

    request.then(response => {
      const users = response.data.result
      this.setState({users: users})
    })
  }

  deleteUser = () => {
    // const id = this.state.users.name (?)
    // const url = `${baseUrl}/users/deleteUser?id=${id}`
  }

  componentDidMount() {
    this.getAllUsers()
  }

  render() {
    // const usersList = this.state.users.map((user) => {
    //   return </>
    // })
    return (
      <div className="App">
        <header>
          <h2>Future4 Users</h2>
          <button onClick={this.changeScreen}>{this.state.mainScreen ? 'Ver usuários cadastrados' : 'Cadastrar usuário'}</button>
          <hr/>
        </header>
        {this.state.mainScreen ? <main>
          <h3>Cadastrar Novo Usuário</h3>
          <input type='text' placeholder='Nome completo' onChange={this.onUsernameChange} value={this.state.username}/>
          <input type='email' placeholder='E-mail' onChange={this.onEmailChange} value={this.state.email}/>
          <button onClick={this.createUser}>Cadastrar</button>
        </main> : <main>
          <h3>Usuários Cadastrados da Future4</h3>
          <ul>
            {this.state.users.map(user => (
              <li>{user.name}</li>
            ))}
          </ul>
        </main>}
      </div>
    );
  }
}