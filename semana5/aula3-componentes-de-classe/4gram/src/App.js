import React from 'react';
import './App.css';
import LoadPost from './components/LoadPost/LoadPost'

function App() {
  return (
    <main className="App">
        <h2>4gram</h2>
        <LoadPost profilePicture="victor-fernandes.jfif" name="Victor Fernandes" image="post1.jpg" description="Amo uma dupla! @paulinha_diva @iamgoli" likes={458} comments={12}/>
        <LoadPost profilePicture="vivi-guedes.jpg" name="Vivi Guedes" image="post2.jpg" description="Oi, seguimores! EMPOLGADÍSSIMA!
        Vou ficar menos ativa aqui, mas prometo não sumir ;) Obrigadaaa pelo apoio de vocês! Quer saber mais sobre esse projeto? Link na bio! Usa meu código: 344359" likes={2156} comments={477}/>
        <LoadPost profilePicture="emma-graves.jpg" name="Emma Graves" image="post3.jpg"
        description="Antes, só queria estar morta. Agora, só quero programar. Obrigada, #Future4 !" likes={666} comments={48}/>
    </main>
  );
}

export default App;