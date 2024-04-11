import styled from 'styled-components';

export const Container = styled.div`
display: ${({visible}) => visible ? 'flex' : 'none'};
justify-content:center ;
align-items: center;
`;

export const PopupStyled = styled.div`
  border: 2px solid black;
  max-width: 600px;
  width: 500px; 
  height: 250px;
  background-color: white;
  z-index: 50;
  top: 25%;
  left: 25%;
  position: absolute;

  p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
