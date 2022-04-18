import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "verdadero" : "Falso"}</li>
        <li>{props.array.join(", ")}</li>
        <li>{props.objeto.nombre + " " + props.objeto.apellido}</li>
        <li>{props.elementoReact}</li>
        <li>{props.array.map(props.funcion).join(", ")}</li>
        <li>{props.componente}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  porDefecto: "Las props",
};

Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
};