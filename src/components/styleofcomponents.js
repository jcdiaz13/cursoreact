import styled from "styled-components";

// export const Box = styled.div`   //Puede ser cualquier etiqueta (.button, .p, .div...)
// width: 100px;
// height: 100px;
// background-color: red;

// /* background-color:${(props) => props.color}; */
// /* margin:${(prop) => prop.m}px; */
// /* background-color:red; */

// background-color:${({ color }) => color || "red"};
// margin-bottom: ${({ m }) => m}px;

// span {
//     font-weight: bold;
// }

// `;
// export const MyStyledComponent = styled.div`
// width: 100px;
// height: 100px;
// background-color:${({ color }) => color || 'yellow'} ;
// `;


export const Back = styled.div`
    background: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: ${({ visible }) => visible ? 'flex' : 'none'};
    position:fixed;
    top:0;
    left:0;
    padding:10px;

    div{
    background-color: white;
    text-align: center;
    width: 600px;
    height:600px;
    }
`