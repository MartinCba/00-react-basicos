import React from "react";
import logo from "./logo.svg";
import Componente from "./components/Componente";
import "./App.css";
import Propiedades from "./components/propiedades";
import AjaxApis from "./components/AjaxApis";

import Estado from "./components/estado";
import RenderizadoCondicional from "./components/renderizadoCondicional";
import RenderizadoElementos from "./components/renderizadoElementos";
import  {
  EventosES6,
  EventosES7,
  MasSobreEventos,
} from "./components/Eventos";
import Padre from "./components/ComunicacionComponentes";
import CicloVida from "./components/CicloVida";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import CustomHooks from "./components/CustomHooks";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
        <section>
          <Componente msg="Hola soy un nuevo componente" />
          <hr />
          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={7}
            booleano={true}
            array={[1, 2, 3]}
            objeto={{ nombre: "Martín", apellido: "Hernández" }}
            elementoReact={<i>Esto es un elemento React</i>}
            funcion={(num) => num * num}
            componente={<Componente msg="Soy un componente pasado como prop" />}
          />
          <hr />
          <Estilos />
          <hr />
          <ComponentesEstilizados />
          <hr />
          <Formularios />
          <hr />
          <Referencias />
          <hr />
          <CustomHooks />
          <hr />
          <Estado />
          <hr />
          <RenderizadoCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventosES6 />
          <hr />
          <EventosES7 />
          <hr />
          <MasSobreEventos />
          <hr />
          <Padre />
          <hr />
          <CicloVida />
          <hr />
          <AjaxApis />
          <hr />
          <ContadorHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <RelojHooks />
          <hr />
          <AjaxHooks />
        </section>
      </header>
    </div>
  );
}

export default App;
