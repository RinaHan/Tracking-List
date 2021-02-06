import React from 'react';
import styled from 'styled-components';
import BigButton from 'comps/BigButton';

import { MdAlarm } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';

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
    position: relative;
    bottom: 5%;
    left: 80%;
    border-radius: 50%;
`;

const BtnCont = styled.div`
    width: 100%;
    height: 83px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Alert = ({onCompleteTask}) => {
    return<Container>
        <AlertMsgCont>
            <AlertMsg>
                <h2>Time to take your medication!</h2>
                <AlertIcon><MdAlarm size={56}/></AlertIcon> {/* icon goes here */}
            </AlertMsg>
        </AlertMsgCont>
        <BtnCont>
            <BigButton icon={<MdCheck size={24}/>}  label="Completed" onClick={()=> {
                onCompleteTask()
            }} />
        </BtnCont>
    </Container>
}

Alert.defaultProps = {
    onCompleteTask:()=>{}
}

export default Alert;