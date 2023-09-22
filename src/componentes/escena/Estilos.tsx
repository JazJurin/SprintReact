import styled from 'styled-components';

export const Boton = styled.button`
width: 50%;
padding: 15px;
background-color: lightgray;
text-align: center;
`;

export const EstiloFrases = styled.div`
background-color: ${props => (props.resaltada ? 'pink' : 'white')};
margin: 10px;
padding: 10px;
text-align: center;
border: 2px solid;
border-radius: 50px;
font-size: 16px;
`;

export const ContenedorBienvenida = styled.div`
background-color: Lavender;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

export const TituloPortada = styled.h1`
text-align: center;
color: RoyalBlue;
`;

export const DescripcionPortada = styled.p`
font-weight: bold;
text-align: center;
color: CornflowerBlue;
`;

export const BotonPortada = styled.button`
margin: 10px;
padding: 15px;
background-color: LightBlue;
border: none;
border-radius: 50px;
`



