import { useEffect, useState } from "react";
import Escena from "./componentes/escena/Escena.js";
import frases from "./frases.json";
import { Boton } from "./componentes/escena/Estilos.js";
import Bienvenida from './componentes/escena/Bienvenida.js'

const App = () => {
  const [textos, setTextos] = useState([]);
  const [fraseResaltada, setFraseResaltada] = useState(0);
  const [mostrarBienvenida, setMostrarBienvenida] = useState(true);

  useEffect(() => {
    setTextos(frases);
  }, []);

  const fraseAnterior = () => {
    if (fraseResaltada > 0) {
      setFraseResaltada(fraseResaltada - 1);
    }
  };

  const siguienteFrase = () => {
    if (fraseResaltada < textos.length - 1) {
      setFraseResaltada(fraseResaltada + 1);
    }
  };

  return (
    <div>
      {mostrarBienvenida ? (
        <Bienvenida empezar={() => setMostrarBienvenida(false)} />
      ) : (
        <>
          <Boton onClick={fraseAnterior}>Retroceder</Boton>
          <Boton onClick={siguienteFrase}>Avanzar</Boton>
          {textos.map((frase, index) => (
            <Escena
              key={index}
              texto={frase.texto}
              resaltada={index === fraseResaltada}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default App;
