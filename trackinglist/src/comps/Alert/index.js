import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 100%;
    width: 325px;
    height: 263px;
    background-color: #FFFFFF;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
`;

const AlertMsgCont = styled.div`
    width: 100%;
    height: 180px;
    background-color: #4DC2A6;
    border-radius: 25px 25px 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AlertMsg = styled.div`
    margin: 35px;
    color: #FFFFFF;
    text-align: left;
`;

const AlertIcon = styled.div`
    width: 56px;
    height: 56px;
    background-color: white;
    position: relative;
    bottom: 10%;
    left: 80%;
    border-radius: 50%;
`;

const Btn = styled.div`
    width: 100%;
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DummyBtn = styled.div`
    width: 248px;
    height: 47px;
    background-color: #e6e6e6;
`;

const Alert = () => {
    return<Container>
        <AlertMsgCont>
            <AlertMsg>
                <h2>Time to take your medication!</h2>
                <AlertIcon></AlertIcon> {/* icon goes here */}
            </AlertMsg>
        </AlertMsgCont>
        <Btn><DummyBtn /></Btn> {/* btn comp goes here */}
    </Container>
}

Alert.defaultProps = {

}

export default Alert;