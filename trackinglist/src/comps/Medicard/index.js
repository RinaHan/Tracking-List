import React from "react";
import styled from "styled-components";
import { MdAlarm } from "react-icons/md";

const Container = styled.div`
  display: flex;
`;

const CardLeft = styled.div`
  min-width: 75px;
  height: 125px;
  border-radius: 25px 0 0 25px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ce574f")};
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
  min-width: 200px;
  max-width: 200px;
  height: 125px;
  border-radius: 0 25px 25px 0;
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 15px;
`;

const MediName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #000;
  text-align: left;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`

const Dosage = styled.div`
  font-size: 12px;
  //padding-top: 10px;
`;

const ButtomCont = styled.div`
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  //padding-top: 20px;
  width: 90%;
`;

const TimerCont = styled.div`
  font-size: 12px;
  align-items: center;
  justify-content: center;
  //display: flex;
  /* width: 62px;
  height: 15px; */
  padding: 5px 18px;
  background-color: #e6e6e6;
  border-radius: 50px;

  display: flex;
  flex-direction: row;
  gap: 5px;
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
const AlertIcon = styled.div`
  position: relative;
  bottom: 5%;
  left: 80%;
  border-radius: 50%;
`;

const MediCard = ({
  hr,
  min,
  mediname,
  dosage,
  timerHr,
  timerMin,
  AMPM,
  bgcolor,
}) => {
  return (
    <Container>
      <CardLeft bgcolor={bgcolor}>
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
        <Info>
          <Dosage>{dosage}mg</Dosage>
          <ButtomCont>
            <TimerCont>
              <MdAlarm size={12} />
              {timerHr}:{timerMin}
              {AMPM}
            </TimerCont>
            {/* <Edit>Edit</Edit> */}
          </ButtomCont>
        </Info>
      </CardRight>
    </Container>
  );
};

MediCard.defaultProps = {
  hr: "00",
  min: "15",
  mediname: "Amlodipine Besylate",
  dosage: "5",
  timerHr: "8",
  timerMin: "30",
  AMPM: "AM",
};

export default MediCard;
