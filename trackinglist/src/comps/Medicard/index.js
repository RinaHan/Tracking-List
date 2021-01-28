import React from "react";
import styled from "styled-components";
import alarm from "comps/Medicard/alarm.png";

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
  font-weight: 700;
  font-size: 18px;
`;

const HourNum = styled.div``;
const MinNum = styled.div``;

const NormalFont = styled.div`
  font-size: 10px;
  padding-left: 5px;
`;

const HR = styled.div`
  padding-bottom: 10px;
`;

const MIN = styled.div``;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 125px;
  border-radius: 0 25px 25px 0;
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
`;

const MediName = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #000;
`;

const Dosage = styled.div`
  font-size: 12px;
  padding-top: 10px;
`;

const ButtomCont = styled.div`
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  width: 90%;
`;

const Timer = styled.div`
  font-size: 7px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 62px;
  height: 15px;
  background-color: #e6e6e6;
  border-radius: 50px;
`;

const Edit = styled.button`
  font-size: 12px;
  font-weight: 500px;
  border: none;
  width: 86px;
  height: 28px;
  border-radius: 10px;
  background-color: #e6e6e6;
`;

const Icon = styled.img`
  width: 8px;
  height: 8px;
  padding-right: 5px;
`;

const Medicard = ({ hr, min, mediname, child, mom, timer }) => {
  return (
    <Container>
      <CardLeft>
        <Time>
          <Bold>
            <HourNum>{hr}</HourNum>
            <MinNum>{min}</MinNum>
          </Bold>

          <NormalFont>
            <HR>HR</HR>
            <MIN>MIN</MIN>
          </NormalFont>
        </Time>
      </CardLeft>
      <CardRight>
        <MediName>{mediname}</MediName>
        <Dosage>{child}/{mom}</Dosage>
        <ButtomCont>
          <Timer>
            <Icon src={alarm} />
            {timer} AM
          </Timer>
          <Edit>Edit</Edit>
        </ButtomCont>
      </CardRight>
    </Container>
  );
};

Medicard.defaultProps = {
  hr: "00",
  min: "15",
  mediname: "Amlodipine Besylate",
  child:"1",
  mom:"1",
  timer: "8:30",
};

export default Medicard;
