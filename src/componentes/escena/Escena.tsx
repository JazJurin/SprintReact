import { EstiloFrases } from "./Estilos";

const Escena = ({ texto, resaltada }) => {
    console.log('resaltada:', resaltada);
    return (
      <EstiloFrases resaltada={resaltada}>{texto}</EstiloFrases>  
    );
}


export default Escena;