import './App.css';
import freecodecampLogo from './Imagenes/freecodecamp-logo.svg';
import Boton from './Componentes/Boton.jsx';
import Contador from './Componentes/Contador.jsx';

/*Continuar con los Hooks: useState 🟨*/

function App() {
  const manejarClic = () => {
    console.log('Clic');
  };

  const reiniciarContador = () => {
    console.log('Reiniciando contador');
  };

  return (
    <>
      <div className="App">
        <div className="freecodecamp-log-contenedor">
          <img className="freecodecamp-logo" src={freecodecampLogo} alt="Logo de FreeCodeCamp" />
        </div>
        <div className="contenedor-principal">
          <Contador numClics="5" />
          <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
          <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador} />
        </div>
      </div>
    </>
  );
}

export default App;
