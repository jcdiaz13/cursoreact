import styled from 'styled-components';

export const Container = styled.div`
display: ${({visible}) => visible ? 'flex' : 'none'};
justify-content:center ;
align-items: center;

`;



export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position:fixed;
width: 100%;
height: 100%;

`;


export const Popup = styled.div`
max-width: 600px;
background-color: blue;
`;