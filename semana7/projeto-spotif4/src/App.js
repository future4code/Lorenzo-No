import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PlaylistComponent from './components/PlaylistComponent'
import './App.css';


const ActionSection = styled.section`
  display: flex;
  justify-content: center;
`

const ActionItem = styled.div`
  padding: 0 10px;
`


const baseUrl = 'https://us-central1-spotif4.cloudfunctions.net/api'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      newPlaylistName: '',
      playlistList: [],
      playlistMusics: [],
    }
  }

  onUsernameChange = ev => {
    this.setState({username: ev.target.value})
  }

  onNewPlaylistNameChange = ev => {
    this.setState({newPlaylistName: ev.target.value})
  }

  createPlaylist = async() => {
    const url = `${baseUrl}/playlists/createPlaylist`

    const data = {
      'name': this.state.newPlaylistName
    }

    const header = {
      headers: {
        auth: this.state.username
      }
    }

    try {
      await axios.post(url, data, header)
      alert('Playlist criada com sucesso!')
      this.setState({newPlaylistName: ''})
      this.getAllPlaylists()
    } catch(err) {
      this.state.username === '' && alert('Favor digitar o nome de usuário.')
      this.state.newPlaylistName === '' && alert('Favor nomear a nova playlist.')
      this.state.username !== '' && this.state.newPlaylistName !== ''
      && alert(`Ocorreu um erro: ${err.message}.\nÉ possível que já exista uma playlist com este nome.`)
    }
  }

  getAllPlaylists = async(res) => {
    const url = `${baseUrl}/playlists/getAllPlaylists`

    const header = {
      headers: {
        auth: this.state.username
      }
    }

    try {
      res = await axios.get(url, header)
      this.setState({playlistList: res.data.result.list})
      this.state.playlistList.length === 0 && alert('Playlist vazia.')
    } catch(err) {
      this.state.username === '' ? alert('Favor digitar o nome de usuário.') : alert(`Ocorreu um erro: ${err.message}`)
    }
  }

  getPlaylistMusics = async(id) => {
    const url = `${baseUrl}/playlists/getPlaylistMusics/${id}`

    const header = {
      headers: {
        auth: this.state.username
      }
    }

    try {
      const res = await axios.get(url, header)
      this.setState({playlistMusics: res.data.result.musics})
    } catch(err) {
      alert(`Ocorreu um erro: ${err.message}`)
    }
  }

  deletePlaylist = async(id) => {
    const url = `${baseUrl}/playlists/deletePlaylist?playlistId=${id}`

    const header = {
      headers: {
        auth: this.state.username
      }
    }

    try {
      await axios.delete(url, header)
      this.getAllPlaylists()
    } catch(err) {
      alert(`Ocorreu um erro: ${err.message}`)
    }
  }

  render() {
    return (
      <div className="App">
        <h2>Spotif4</h2>
        <label htmlFor='username'>Digite o nome de usuário: </label>
        <input id='username'type='text' placeholder='Nome de usuário (token)' onChange={this.onUsernameChange} value={this.state.username}/>
        <hr/>
        <h3><label htmlFor='newPlaylist'>Ações</label></h3>
        <ActionSection>
          <ActionItem>
            <input id='newPlaylist' type='text' placeholder='Nome da nova playlist' onChange={this.onNewPlaylistNameChange} value={this.state.newPlaylistName}/>
            <button onClick={this.createPlaylist}>Criar</button>
          </ActionItem>
          <ActionItem>
           <button onClick={this.getAllPlaylists}>Ver Playlists</button>
          </ActionItem>
        </ActionSection>
        <br/>
        <h3>Playlists</h3>
        {this.state.playlistList.map(playlist => {
          return (
            <PlaylistComponent playlist={playlist} getPlaylistMusics={this.getPlaylistMusics} musics={this.state.playlistMusics}/>
          )
        })}
      </div>
    );
  }
}
