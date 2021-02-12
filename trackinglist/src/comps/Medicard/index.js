import React from "react";
import styled from "styled-components";
import { MdAlarm } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction:row;
  background-color:#D2E0E9;
  padding:0 10px 0 10px;
`;

const CardLeft = styled.div`
  min-width: 95px;
  height: 125px;
  border-radius: 25px 0 0 25px;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#ce574f")};
`;

const Time = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

const Icon = styled.div`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.35);
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

  min-width: ${props=>props.width ? props.width : "180px"};
  min-height: ${props=>props.height ? props.height : "125px"};
  max-width: ${props=>props.width ? props.width : "180px"};
  max-height:${props=>props.height ? props.height : "125px"};

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
  min-width: 90%;  
`;
const Dosage = styled.div`
  font-size: 12px;
  //margin:5px 0 20px 0;

`;

// const ButtonCont = styled.div`
//   font-size: 12px;
//   display: flex;
//   width: 50%;
// `;

const ButtonCont = styled.div`
  color: #fff;
  font-size: 12px;
  display: flex;
  font-size: 12px;
  align-items: center;
  justify-content: center;

  padding: 10px 18px;
  min-width: 50px;
  background-color: #191919;
  border-radius: 7px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  :hover {
    cursor: pointer;
    background-color: #ce574f;
    transition: background-color 300ms;
  }
`;

const MediCard = ({
  mediname,
  dosage,
  time,
  bgcolor,
  onDelete
}) => {

  const medications = [
    {}
  ];

  return (
    <Container>
      {medications.map(o=><div style={{display:"flex", flexDirection:"row", padding:"15px"}}>
      <CardLeft bgcolor={bgcolor}>
        <Time>
          <Icon>
            <MdAlarm size={24}/>
          </Icon>
          {time}
        </Time>
      </CardLeft>
      <CardRight>
        <MediName>{mediname}</MediName>
        <MedDetails>
          <Dosage>{dosage}mg</Dosage>
          <ButtonCont onClick={()=>{
            onDelete(medications)
            // this.delete.bind(this)
          }}>
              <FaTrash size={14} color={"#fff"} />
              Delete
          </ButtonCont>
        </MedDetails>
      </CardRight>
      </div>)}
    </Container>
  );
};

MediCard.defaultProps = {
  hr: null,
  min: null,
  mediname: null,
  dosage: null,
  time: null,
  onDelete:()=>{}
};

export default MediCard;
