import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const CardLeft = styled.div`
  width: 75px;
  height: 125px;
  border-radius: 25px 0 0 25px;
  background-color: #ce574f;
`;

const Time = styled.div`
  color: #fff;
  
  display: flex;
  
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

`;

const Bold = styled.div`
 font-weight:700;
 font-size:18px;
  
`;
const HourNum = styled.div`

`;
const MinNum = styled.div`
 
`;

const NormalFont = styled.div`
font-size:10px;
padding-left:9px;
`;
const HR = styled.div`
padding-bottom:10px;

`;

const MIN= styled.div``;


const CardRight = styled.div`
display:flex;
flex-direction:column;
  width: 195px;
  height: 125px;
  border-radius: 0 25px 25px 0;
  background-color: #fff;
  justify-content:center;
  align-items:flex-start;
  padding-left:20px;
`;
const MediName= styled.div`
font-size: 16px;
font-weight:700;
color: #000;
`;
const Dosage= styled.div`
font-size: 12px;
padding-top:10px;
/* display:inline-flex; */
`;
const ButtomCont= styled.div`
font-size: 12px;
display:inline-flex;
align-items:center;
justify-content:space-between;
padding-top:10px;
width:90%;
`;
const Timer= styled.div`
font-size: 7px;
/* padding-right:20px; */
width:62px;
height:15px;
background-color:#E6E6E6;
border-radius:50px;
`;
const Edit= styled.button`
font-size: 12px;
border:none;
width:86px;
height:28px;
border-radius:10px;
background-color:#E6E6E6;
`;




const Medicard = () => {
  return (
    <Container>
      <CardLeft>
        <Time>
          <Bold>
            <HourNum>te</HourNum>
            <MinNum>St</MinNum>
          </Bold>

          <NormalFont>
            <HR>HR</HR>
            <MIN>MIN</MIN>
          </NormalFont>
        </Time>
      </CardLeft>
      <CardRight>
          <MediName>TestTestTestTest</MediName>
          <Dosage>1/1</Dosage>
          <ButtomCont>
              <Timer>test</Timer>
              <Edit>Edit</Edit>
          </ButtomCont>
      </CardRight>
    </Container>
  );
};

Medicard.defaultProps = {};

export default Medicard;
