import React from 'react';
import styled from 'styled-components';


const PlaylistSection = styled.section`
  width: 20vw;
  min-width: 300px;
  margin: auto;
`

const PlaylistItem = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    cursor: pointer;
  }
`

const DeleteButton = styled.div`
  font-weight: bold;
  cursor: pointer;
`

const PlaylistMusics = styled.div`

`


export default class PlaylistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getPlaylistMusics = () => {
    this.props.getPlaylistMusics(this.props.playlist.id)
  }

  render() {
    return (
      <PlaylistSection>
        <PlaylistItem>
          <div onClick={() => this.getPlaylistMusics()}>{this.props.playlist.name}</div>
          <DeleteButton onClick={() => this.deletePlaylist(this.props.playlist.id)}>X</DeleteButton>
        </PlaylistItem>
        <PlaylistMusics>
          {this.props.musics.map(music => (
            <a href={music.url}>{music.artist} - {music.name}<br/></a>
          ))}
        </PlaylistMusics>
    </PlaylistSection>
    )
  }

}