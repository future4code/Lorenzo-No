import React from "react";
import { connect } from "react-redux";

class Planner extends React.Component {
  render() {
    return <div>
      <div>
        <label htmlFor="task">Tarefa</label>
        <input id="task" type="text" placeholder="Nova tarefa" />
        <select id="weekday">
          <option value="" disabled selected>Escolha um dia</option>
          <option value="monday">Segunda</option>
          <option value="tuesday">Terça</option>
          <option value="wednesday">Quarta</option>
          <option value="thursday">Quinta</option>
          <option value="friday">Sexta</option>
          <option value="saturday">Sábado</option>
          <option value="sunday">Domingo</option>
        </select>
        <button>Criar</button>
      </div>
      <div>

      </div>
    </div>;
  }
}

export default connect()(Planner);
