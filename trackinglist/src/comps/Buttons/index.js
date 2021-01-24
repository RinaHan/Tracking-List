import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
/* min-width:${props=>props.width ? props.width : "100px"};
min-height:${props=>props.height ? props.width : "100px"};
max-width:${props=>props.width ? props.width : "50%"};
max-height:${props=>props.height ? props.width : "300px"}; */
background-color:blue;
`;
const BasicButton = styled.button`
min-height:25px;
width:100%;
`;

const Buttons = ({width}) => {
    return<Container>
        {/* <BasicButton width={width}>test</BasicButton> */}
    </Container>
}

Buttons.defaultProps = {
width:null,
}

export default Buttons;