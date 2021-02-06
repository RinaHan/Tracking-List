import React from "react";
import styled from "styled-components";
import MediCard from "comps/Medicard";

const Container = styled.div`
  min-width: 330px;
  max-width: 400px;
  padding-bottom:20px;
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
      <MediCard></MediCard>
    </Container>
  );
};

MediCont.defaultProps = {
  when: "Within the Hour",
};

export default MediCont;
