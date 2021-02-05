import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    :hover {
        cursor: pointer;
    }
`;

const TinyButton = styled.button`
    min-height:50px;
    width: ${props=>props.width ? props.width : "110px"};
    border-radius:15px;
    border: none;
    font-size:14px;
    background-color: ${props=>props.buttonBg ? props.buttonBg : "#E6E6E6"};
    color: ${props=>props.textColor ? props.textColor : "#000000"};
`;

const SmallButton = ({label, width, buttonBg, textColor}) => {
    return<Container>
        <TinyButton background-color={buttonBg} width={width}>{label}</TinyButton>
    </Container>
}

SmallButton.defaultProps = {
    label:"Button",
    width:"110px",
    buttonBg:"#E6E6E6",
    textColor:"#ffff",
    
}

export default SmallButton;