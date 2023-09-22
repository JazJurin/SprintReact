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
`



