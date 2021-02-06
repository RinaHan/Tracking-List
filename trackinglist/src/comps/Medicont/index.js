import React from "react";
import styled from "styled-components";
import MediCard from "comps/Medicard";

const Container = styled.div`
  min-width: 330px;
  max-width: 500px;
  padding-bottom:10px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#d2e0e9")};
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const CardCont = styled.div`
  padding-bottom: 20px;
  position: relative;
`;

const MediCont = ({ bgcolor, when }) => {
  return (
    <Container bgcolor={bgcolor}>
      <h4>{when}</h4>
      <CardCont>
        <MediCard 
        bgcolor="#ce574f" 
        hr="3"
        min="30"
        mediname="Lisinopril"
        dosage="2"
        timerHr="8"
        timerMin="20"
        AMPM="AM"
        />
      </CardCont>
      <CardCont>
        <MediCard 
        bgcolor="#874FCE" 
        />
      </CardCont>
      <CardCont>
        <MediCard 
        bgcolor="#F6A860" 
        />
      </CardCont>
      <CardCont>
        <MediCard 
        bgcolor="#6ABDD7" 
        />
      </CardCont>
    </Container>
  );
};

MediCont.defaultProps = {
  when: "Within the Hour",
};

export default MediCont;
