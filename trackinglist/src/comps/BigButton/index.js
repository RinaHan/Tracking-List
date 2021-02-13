import React from 'react';
import styled from 'styled-components';
import {MdDone, MdAdd} from "react-icons/md";

const Container = styled.div`
    padding: 10px;
    :hover {
        cursor: pointer;
    }
`;

const LargeButton = styled.button`
    min-height:50px;
    width:250px;
    border-radius:15px;
    border: none;
    font-size:14px;
    background-color: #E6E6E6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
`;
const Icon = styled.span`
    margin-left: -20px;
    margin-right: 10px;
`;

const BigButton = ({icon, label}) => {
    return<Container>
        <LargeButton><Icon>{icon}</Icon>{label}</LargeButton>
    </Container>


}

BigButton.defaultProps = {
    icon:null,
    label:"Big Button",
}

export default BigButton;