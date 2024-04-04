import styled from "styled-components";;

export const Box = styled.div`   //Puede ser cualquier etiqueta (.button, .p, .div...)
width: 100px;
height: 100px;
background-color: red;

/* background-color:${(props) => props.color}; */
/* margin:${(prop) => prop.m}px; */
/* background-color:red; */

background-color:${({ color }) => color || "red"};
margin-bottom: ${({ m }) => m}px;

span {
    font-weight: bold;
}

`;

export const MyStyledComponent = styled.div`
width: 100px;
height: 100px;

background-color:${({ color }) => color || 'yellow'} ;

`;

export const Popup = styled.div`

display:none:${({!visible}) => visible || display: auto}
`;