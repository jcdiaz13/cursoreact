import styled, { css } from 'styled-components';
import flecha from '../../assets/img/flecha.png';

export const Container = styled.div`
 width: 1400px;
 margin:auto;
`;

export const Row = styled.div`
display:flex;
`;

export const ColRight = styled.div`
 display: flex;
 width: 700px;
 flex-wrap: wrap;

 img {
  width: 300px;
  height: 300px;
  border: 1px solid black;  
  border-radius: 20px;
  margin: 10px;
 }
`;

export const ColLeft = styled.div`
 width: 700px;
 background-color:grey;
 border-radius: 20px;
 `;

 export const Menu = styled.div`
 display:flex;
`;

export const Btn = css`
display: inline-block; 
background-image: url(${flecha});
background-repeat: no-repeat;
margin-top: 10px;
width: 60px; 
height: 60px; 
`
export const BtnLeft = styled.img`
${Btn}
margin-right: 10px; 
`
export const BtnRight = styled.img`
${Btn}; 
margin-left: 10px; 
transform: scaleX(-1)
`