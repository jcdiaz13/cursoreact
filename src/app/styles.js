import styled from 'styled-components';

export const Container = styled.div`
width: 700px;
margin:auto;
font-size: 20px;
`

export const Row = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;

img {
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
`

export const Question = styled.div`
text-align: center;
`
export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.5);
position:absolute;
width: 100%;
height: 100%;

`