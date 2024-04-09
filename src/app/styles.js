import styled from 'styled-components';

export const ParagraphStyle = styled.div`
    background-color: ${({lighting}) => lighting? 'green' : 'white'};
`