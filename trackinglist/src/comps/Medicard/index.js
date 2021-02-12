import React from "react";
import styled from "styled-components";
import { MdAlarm } from "react-icons/md";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#d2e0e9")};
  padding: 0 10px 0 10px;
  justify-content:center;
  min-width:${props=>props.width ? props.width : "400px"};
  max-width:${props=>props.width ? props.width : "500px"};
`;

const CardLeft = styled.div`
  min-width: 75px;
  height: 125px;
  border-radius: 25px 0 0 25px;
  background-color: ${(props) => (props.cardcolor ? props.cardcolor : "#ce574f")};
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
  text-align: right;
`;

const HourNum = styled.div`
  padding-bottom: 7px;
`;
const MinNum = styled.div``;

const NormalFont = styled.div`
  font-size: 10px;
  padding-left: 5px;
`;

const HR = styled.div`
  padding-bottom: 15px;
`;

const MIN = styled.div``;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  min-width: ${(props) => (props.width ? props.width : "200px")};
  min-height: ${(props) => (props.height ? props.height : "125px")};
  max-width: ${(props) => (props.width ? props.width : "200px")};
  max-height: ${(props) => (props.height ? props.height : "125px")};
  border-radius: 0 25px 25px 0;
  background-color: #fff;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`;

const MediName = styled.div`
  font-size: 21px;
  font-weight: 700;
  color: #000;
  text-align: left;
  text-transform: capitalize;
  margin-bottom: 15px;
`;

const MedDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 80%;
`;
const Dosage = styled.div`
  font-size: 12px;
  //margin:5px 0 20px 0;
`;

const ButtomCont = styled.div`
  font-size: 12px;
  display: flex;
  width: 50%;
`;

const TimerCont = styled.div`
  font-size: 12px;
  align-items: center;
  justify-content: center;
  padding: 5px 18px;
  min-width: 50px;
  background-color: #e6e6e6;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const MediCard = ({ hr, min, mediname, dosage, time, bgcolor, cardcolor}) => {
  const medications = [{}];

  return (
    <Container bgcolor={bgcolor}>
      {medications.map((o) => (
        <div style={{ display: "flex", flexDirection: "row", padding: "15px" }}>
          <CardLeft cardcolor={cardcolor}>
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
            <MedDetails>
              <Dosage>{dosage}mg</Dosage>
              <ButtomCont>
                <TimerCont>
                  <MdAlarm size={14} />
                  {time}
                </TimerCont>
              </ButtomCont>
            </MedDetails>
          </CardRight>
        </div>
      ))}
    </Container>
  );
};

MediCard.defaultProps = {
  hr: null,
  min: null,
  mediname: null,
  dosage: null,
  time: null,
};

export default MediCard;
