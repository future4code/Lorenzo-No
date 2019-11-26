import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          FutureTube
        </div>
        <div>
          <input type="text" placeholder="Pesquisar..."></input>
        </div>
      </header>
      <main>
        <section>
            <menu>
              <p>Início</p>
              <p>Em alta</p>
              <p>Inscrições</p>
              <p>Originais</p>
            </menu>
            <div>
              <a href="http://soter.ninja/videos/1.mp4"><video src="http://soter.ninja/videos/1.mp4" ></video>
              Vídeo 1</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/2.mp4"><video src="http://soter.ninja/videos/2.mp4" ></video>
              Vídeo 2</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/3.mp4"><video src="http://soter.ninja/videos/3.mp4" ></video>
              Vídeo 3</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/4.mp4"><video src="http://soter.ninja/videos/4.mp4" ></video>
              Vídeo 4</a>
            </div>
        </section>
        <section>
            <menu>
              <p>Novos vídeos</p>
              <p>Histórico</p>
              <p>Biblioteca</p>
              <p>Procurar canais</p>
            </menu>
            <div>
              <a href="http://soter.ninja/videos/5.mp4"><video src="http://soter.ninja/videos/5.mp4" ></video>
              Vídeo 5</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/6.mp4"><video src="http://soter.ninja/videos/6.mp4" ></video>
              Vídeo 6</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/7.mp4"><video src="http://soter.ninja/videos/7.mp4" ></video>
              Vídeo 7</a>
            </div>
            <div>
              <a href="http://soter.ninja/videos/8.mp4"><video src="http://soter.ninja/videos/8.mp4" ></video>
              Vídeo 8</a>
            </div>
        </section>
    </main>
    <footer>
        <p>Sobre Imprensa Direitos autorais Entre em contato Criadores de conteúdo Publicidade Desenvolvedores</p>
        <p>Termos Privacidade Política e Segurança Testar os novos recursos</p>
        <p>© 2019 FutureTube, LLC</p>
    </footer>
    </div>
  );
}

export default App;
