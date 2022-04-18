import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };
  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>Comunicación entre componentes</h2>
        <p>
          Contador Padre <b>{this.state.contador}</b>
        </p>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo numero 1"
        ></Hijo>
        <Hijo
          incrementarContador={this.incrementarContador}
          mensaje="Mensaje para el hijo numero 2"
        ></Hijo>
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      <h4>{props.mensaje}</h4>
      <button onClick={props.incrementarContador}>+</button>
    </>
  );
}
