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
 background-color: SlateGray;

 img {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  margin: 10px;
  cursor:pointer;
 }
`;

export const ColLeft = styled.div`
 width: 700px;
 background-color:SlateGray;
 display: flex;

 img {
  width:620px;
  height:620px ;
  border-radius: 20px;
  margin: auto;
 }
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
cursor:pointer;
`
export const BtnLeft = styled.span`
${Btn}
margin-right: 10px; 
`
export const BtnRight = styled.span`
${Btn}; 
margin-left: 10px; 
transform: scaleX(-1);
`
export const Img = styled.img`
border-radius: 20px;
    ${({ active }) => active ? 'border: 4px solid red; z-index:1' : 'border:4px solid transparent'}
`
