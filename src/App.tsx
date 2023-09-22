import { useEffect, useState } from 'react'
import Escena from './componentes/escena/Escena.js'
import frases from './frases.json'

const App = () => {
  const [textos, setTextos] = useState([]);

  useEffect (() => {
    setTextos(frases);
  }, []);
  return (
    <>
    {textos.map((frase, index) => (
       <Escena key={index} texto={frase.texto}/>
    ))}
    </>
  )
}

export default App

