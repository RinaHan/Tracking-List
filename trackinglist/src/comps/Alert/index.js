import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import BigButton from "comps/BigButton";

import { MdAlarm } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdDone, MdAdd } from "react-icons/md";

import styles from "./alert.module.scss";

// const AlertMsgCont = styled.div`
//   width: 100%;
//   height: 160px;
//   background-color: #4dc2a6;
//   border-radius: 25px 25px 0 25px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const AlertMsg = styled.div`
//   margin: 20px 0 0 40px;
//   color: #ffffff;
//   text-align: left;
// `;

// const AlertIcon = styled.div`
//   position: relative;
//   bottom: 15%;
//   left: 70%;
//   border-radius: 50%;
// `;


// const BtnCont = styled.div`
//   width: 100%;
//   height: 83px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Button = styled.div`
//   min-height: 50px;
//   width: 250px;
//   border-radius: 15px;
//   border: none;
//   font-size: 14px;
//   background-color: #e6e6e6;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-weight: 700;
// `;


// const Icon = styled.span`
//     margin-left: -20px;
//     margin-right: 10px;
// `;

const Alert = forwardRef((props, ref) => {
  const [close, setClose] = useState(false);

  const showAlert = () => {
    setClose(true);
  };
  const hideAlert = () => {
    setClose(false);
  };
  useImperativeHandle(ref, () => {
    return {
      showAlert: showAlert,
    };
  });

  return (
    <div className={`${styles.wrap} ${close ? styles.show : null}`} {...props}>
 
        <h3>Time to take your medication!</h3>
        <MdAlarm size={75} style={{position:"fixed", marginLeft:'100px'}}/>
  <div className={styles.bottom}>
    <div className={styles.closeBtn} onClick={hideAlert}>
      <h3>Completed</h3>

    </div>
  </div>
  </div>
);
});

Alert.defaultProps = {};

export default Alert;
