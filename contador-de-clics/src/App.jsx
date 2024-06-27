import './App.css';
import freecodecampLogo from './Imagenes/freecodecamp-logo.svg';
import Boton from './Componentes/Boton.jsx';
import Contador from './Componentes/Contador.jsx';
/*Importar useState -> Hooks (estados)*/
import { useState } from 'react';

function App() {
  /*const [variable, función] = useState(valorInicial)(*/
  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    /*Incrementa en 1*/
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <>
      <div className="App">
        <div className="freecodecamp-log-contenedor">
          <img src={freecodecampLogo} className="freecodecamp-logo" alt="Logo de FreeCodeCamp" />
        </div>
        <div className="contenedor-principal">
          <Contador numClics={numClics} />
          <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
          <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
        </div>
      </div>
    </>
  );
}

export default App;
