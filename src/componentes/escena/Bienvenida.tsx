import { ContenedorBienvenida, TituloPortada } from "./Estilos";
import { DescripcionPortada } from "./Estilos";
import { BotonPortada } from "./Estilos";

const Bienvenida = ({ empezar }) => {
    return (
        <ContenedorBienvenida>
        <TituloPortada>Historia de un Superhéroe</TituloPortada>
        <DescripcionPortada>En esta web podrás avanzar paso a paso en la historia de un superhéroe. Acompañandólo con imágenes que te ayudarán a sumergirte aún más en la dinámica.</DescripcionPortada>
        <BotonPortada onClick={ empezar }>Empezar</BotonPortada>
        </ContenedorBienvenida>
    );
};

export default Bienvenida