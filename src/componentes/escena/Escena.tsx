import { EstiloFrases } from "./Estilos";

const Escena = (props: any) => {
    return (
      <EstiloFrases>{props.texto}</EstiloFrases>  
    );
}

export default Escena;