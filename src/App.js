import "./App.css";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import Boton from "./components/boton.component";
import Contador from "./components/Contador.component";
import { useState } from "react";

function App() {
  const [numCLics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numCLics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="Logo de freecodecamp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador numCLics={numCLics} />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
