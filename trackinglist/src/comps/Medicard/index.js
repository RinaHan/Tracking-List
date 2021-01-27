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
const CardRight = styled.div`
  width: 215px;
  height: 125px;
  border-radius: 0 25px 25px 0;
  background-color: #fff;
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
      <CardRight></CardRight>
    </Container>
  );
};

Medicard.defaultProps = {};

export default Medicard;
