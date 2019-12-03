import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    page: 1,
    name: '',
    age: -1,
    email: '',
    education: 'Ensino médio incompleto',
    course: '',
    school: '',
    reason: '',
    complementaryCourse: 'Curso técnico'
    }
  }


  // Input Controlado

  onChangeName = (e) => {
    this.setState ({name: e.target.value})
  }

  onChangeAge = (e) => {
    this.setState ({age: e.target.value})
  }

  onChangeEmail = (e) => {
    this.setState ({email: e.target.value})
  }

  onChangeEducation = (e) => {
    this.setState ({education: e.target.value})
  }

  onChangeCourse = (e) => {
    this.setState ({course: e.target.value})
  }

  onChangeSchool = (e) => {
    this.setState ({school: e.target.value})
  }

  onChangeReason = (e) => {
    this.setState ({reason: e.target.value})
  }

  onChangeComplementaryCourse = (e) => {
    this.setState ({complementaryCourse: e.target.value})
  }


  // Botões

  onClickBack = (e) => {
    this.setState ({page: this.state.page - 1})
  }

  onClickNext = (e) => {
    this.setState ({page: this.state.page + 1})
  }



  render() {
    let form;
    switch (this.state.page) {
      case 1:
        form = (
          <div>
            <h2>Bem-vindo! Favor preencher o formulário para se cadastrar na Future4.</h2>
            <label htmlFor='name'><p>1. Qual seu nome completo?</p></label>
            <input id='name' type='text' onChange={this.onChangeName}/>
            <label htmlFor='age'><p>2. Quantos anos você tem?</p></label>
            <input id='age' type='number' onChange={this.onChangeAge}/>
            <label htmlFor='email'><p>3. Qual seu e-mail?</p></label>
            <input id='email' type='email' onChange={this.onChangeEmail}/>
            <label htmlFor='education'><p>4. Qual seu grau de escolaridade?</p></label>
            <select id='education' onChange={this.onChangeEducation}>
              <option value='Ensino médio incompleto'>Ensino médio incompleto</option>
              <option value='Ensino médio completo'>Ensino médio completo</option>
              <option value='Ensino superior incompleto'>Ensino superior incompleto</option>
              <option value='Ensino superior completo'>Ensino superior completo</option>
            </select>
          </div>
        );
        break;
      case 2:
        if (this.state.education === 'Ensino médio incompleto' || this.state.education === 'Ensino médio completo') { // Como abreviar essa condição?
          form = (
            <div>
              <label htmlFor='reasonNoCollegeDegree'><p>5. Por que você não terminou?</p></label>
              <input id='reasonNoCollegeDegree' type='text' onChange={this.onChangeReason}/>
              <label htmlFor='complementaryCourse'><p>6. Você fez ou faz algum curso complementar?</p></label>
              <select id='complementaryCourse' onChange={this.onChangeComplementaryCourse}>
                <option value='Curso técnico'>Curso técnico</option>
                <option value='Curso de inglês'>Curso de inglês</option>
                <option value='Os dois'>Os dois</option>
                <option value='Não'>Não</option>
              </select>
            </div>
          );
        } else { // } else if (this.state.education === 'Ensino superior incompleto' || this.state.education === 'Ensino superior completo') {
          form = (
            <div>
              <label htmlFor='course'><p>5. Qual curso você fez ou está fazendo?</p></label>
              <input id='course' type='text' onChange={this.onChangeCourse}/>
              <label htmlFor='school'><p>6. Qual a instituição de ensino?</p></label>
              <input id='school' type='text'onChange={this.onChangeSchool}/>
            </div>
          );
        };
        break;
      case 3:
        form = (
          <div>
            <h2>Obrigado por se cadastrar! Retornaremos com mais informações no seu e-mail.</h2>
          </div>
        );
        break;
      default:
        form = (
        <h1>ERRO!</h1>
        );
    }


    
    return (
      <div className="App">
        <header>
          FutureForms®
        </header>
        <main>
          {form}
          <br/>
          {this.state.page > 1 && <button onClick={this.onClickBack}>Voltar</button>}
          {this.state.page < 3 && <button onClick={this.onClickNext}>Avançar</button>}
          <p>Página {this.state.page} de 3</p>
        </main>
     </div>
    )
  }
}

// O botão [Voltar] devia sumir na última página também. É possível juntar duas condições numa expressão?

export default App;
