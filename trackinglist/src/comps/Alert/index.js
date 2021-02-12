import React, {useState, forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import BigButton from 'comps/BigButton';

import { MdAlarm } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';
import {MdDone, MdAdd} from "react-icons/md";

import styles from './alert.module.scss';

// const Container = styled.div`
//     max-width: 100%;
//     width: 325px;
//     height: 263px;
//     background-color: #FFFFFF;
//     border-radius: 25px;
//     display:${({close})=> close ? "flex" : "none"};
//     flex-direction: column;
//     position:fixed;
//     top: 10;
//     z-index:1;
// `;

// const AlertMsgCont = styled.div`
//     width: 100%;
//     height: 180px;
//     background-color: #4DC2A6;
//     border-radius: 25px 25px 0 25px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `;

// const AlertMsg = styled.div`
//     margin: 35px;
//     color: #FFFFFF;
//     text-align: left;
// `;

// const AlertIcon = styled.div`
//     position: relative;
//     bottom: 5%;
//     left: 80%;
//     border-radius: 50%;
// `;

// const BtnCont = styled.div`
//     width: 100%;
//     height: 83px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
// `;

// const Button = styled.div`
//     min-height:50px;
//     width:250px;
//     border-radius:15px;
//     border: none;
//     font-size:14px;
//     background-color: #E6E6E6;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-weight: 700;
// `;
// const Icon = styled.span`
//     margin-left: -20px;
//     margin-right: 10px;
// `;

const Alert = forwardRef((props, ref) => {

    const [close, setClose] = useState(false);

    const showAlert = ()=>{
        setClose(true);
    };
    const hideAlert = ()=>{
        setClose(false);
    };
    useImperativeHandle(ref, ()=>{
        return {
            showAlert: showAlert
        };
    });

    return (
        <div className={`${styles.wrap} ${close ? styles.show : null}`} {...props}>
        <div className={styles.closeBtn} onClick={hideAlert}>
          Hide
        </div>
        <h1>Child component</h1>
        <h3>
          Component State: <span>{close.toString()}</span>
        </h3>
      </div>
    );
});

Alert.defaultProps = {

}

export default Alert;