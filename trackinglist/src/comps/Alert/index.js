import React, { useState, forwardRef, useImperativeHandle } from "react";
import styled from "styled-components";
import BigButton from "comps/BigButton";

import { MdAlarm } from "react-icons/md";
import { MdCheck } from "react-icons/md";
import { MdDone, MdAdd } from "react-icons/md";

import styles from "./alert.module.scss";

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

const AlertMsgCont = styled.div`
  width: 100%;
  height: 160px;
  background-color: #4dc2a6;
  border-radius: 25px 25px 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlertMsg = styled.div`
  margin: 20px 0 0 40px;
  color: #ffffff;
  text-align: left;
`;

const AlertIcon = styled.div`
  position: relative;
  bottom: 15%;
  left: 70%;
  border-radius: 50%;
`;

const BtnCont = styled.div`
  /* width: 100%;
  height: 83px;
  display: flex;
  justify-content: center;
  align-items: center; */
`;

const AlertButton = styled.button`
  min-height: 50px;
  width: 250px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  background-color: #e6e6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &:hover {
  color: white;
  background: #4dc2a6;
  }
`;

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
      <AlertMsgCont>
        <AlertMsg>
          <h2>Time to take your medication!</h2>
          <AlertIcon>
            <MdAlarm size={50} />
          </AlertIcon>
        </AlertMsg>
        {/* <div className={styles.closeBtn} onClick={hideAlert}>
          <BigButton label="Completed" />
          Completed
        </div> */}
        <BtnCont>
          <AlertButton onClick={hideAlert}>
            <MdDone size={20} />
            Completed
          </AlertButton>
        </BtnCont>
        <h3>
          Component State: <span>{close.toString()}</span>
        </h3>
      </AlertMsgCont>
    </div>
  );
});

Alert.defaultProps = {};

export default Alert;
