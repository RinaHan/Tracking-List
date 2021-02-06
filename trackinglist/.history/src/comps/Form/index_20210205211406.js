import React, { useState } from "react";
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
import {IoIosArrowDown} from 'react-icons/io';
import {IoIosArrowUp} from 'react-icons/io';




const Container = styled.div`
@media (max-width:2000px) and (min-width:200px){
    width:414px;
}
@media (max-width:4000px) and (min-width:1055px){
    width:40%;
}
@media (max-width:10000px) and (min-width:2500px){
    width:1000px;
}
    height:auto;
    background-color:#FFF;
    position:fixed;
    bottom:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 50px 50px 0px 0px;
`;
const Content = styled.div`
    width:auto;
    height:auto;
    display: ${(props) => (props.expand ? "none" : "flex")};  
    align-items:flex-start;
    flex-direction:column;
    margin-top:30px;
`;
const WordCont = styled.div`
    width:auto;
    height:40px;
    display:flex;
    align-items:flex-start;
    margin-top:20px;
`;
const FormInput = styled.input`
    width:100%;
    height:100%;
    box-shadow: 1px 1px 9px -3px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border:none;
    padding: 0 15px;
`;
const InputCont = styled.div`
    width:${props => props.width ? props.width : "330px"};
    height:${props => props.height ? props.height : "40px"};
    margin-top:20px;
`;
const FormButton = styled.button`
    width:100px;
    height:36px;
    border-radius:12px;
    border:none;
    background-color:${props => props.buttonColor ? props.buttonColor : "#e8e8e8"};
    margin-top:40px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:center;
    :hover {
        cursor: pointer;
    }
`;
const Close = styled.div`
    width:auto;
    height:auto;
    padding-left:30px;
    padding-right:30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    background-color:${props => props.bgcolor ? "#E6E6E6" : "none"};
    border-radius:12px;
    :hover {
        cursor: pointer;
    }
`;
const Title = styled.div`
    display:${(props) => (props.display1 ? "flex" : "none")};
`;
const Icon1 = styled.div`
    display:${(props) => (props.display2 ? "flex" : "none")};
    padding-left:10px;
`;
const Icon2 = styled.div`
    display:${(props) => (props.display3 ? "none" : "flex")};
    padding-top: 15px;
`;


const Form = ({ buttonText, onFormComplete, onFormClose, minuteNum }) => {

    const [expand, setExpand] = useState(true);
    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(true);
    const [display3, setDisplay3] = useState(true);
    const [bgcolor, setBgcolor] = useState(true);

    const [medication, setMedication] = useState("");
    const [dosage, setDosage] = useState("");
    const [hour, setHour] = useState(null);
    const [minute, setMinute] = useState(null);

    const handleExpand = () => {
        setExpand(!expand);
        setDisplay1(!display1);
        setDisplay2(!display2);
        setDisplay3(!display3);
        setBgcolor(!bgcolor);
    }

    return <Container >
        <Close onClick={handleExpand} bgcolor={bgcolor}>
            <Title display1={display1}><h3>Add Medication</h3></Title>
            <Icon1 display2={display2}><AiOutlinePlus size={25} /></Icon1>
            <Icon2 display3={display3}><IoIosArrowDown size={35} /></Icon2>
        </Close>
        <Content expand={expand}>
            <WordCont><h4>Add Medication</h4>  </WordCont>
            <WordCont ><h4 style={{ color: "grey" }}>Medication Name</h4></WordCont>
            <InputCont><FormInput type='text' style={{ fontSize: "16px" }} onChange={(e) => {
                setMediname(e.target.value);
            }} /></InputCont>
            <WordCont ><h4 style={{ color: "grey" }}>Dosage</h4></WordCont>
            <InputCont><FormInput type='number' placeholder="mg" style={{ fontSize: "16px" }} onChange={(e) => {
                setDosage(e.target.value);
            }} /></InputCont>

            {/* <div style={{ display: "flex", flexDirection: "row", width: "100%", color: "grey" }}><WordCont><h4>Hour</h4><h4 style={{ paddingLeft: "30px" }}>Minute</h4></WordCont></div> */}

            <WordCont ><h4 style={{ color: "grey" }}>Time</h4></WordCont>
            <InputCont><FormInput type="time" style={{ fontSize: "20px" }} onChange={(e) => {
                    setMin(e.target.value);
                }} /></InputCont>
                
            {/* <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
                <InputCont height={"40px"} width={"50px"}><FormInput type="number" min="0" max="24" style={{ fontSize: "20px" }} onChange={(e) => {
                    setHour(e.target.value);
                }} /></InputCont>
                <InputCont style={{ paddingLeft: "20px" }} height={"40px"} width={"50px"}><FormInput type="number" step="5" min="0" max="55" style={{ fontSize: "20px" }} onChange={(e) => {
                    setMinute(e.target.value);
                }} /></InputCont>
            </div> */}
            <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-evenly" }}>
                <FormButton onClick={() => {
                    onFormClose(handleExpand)
                }}><p>Cancel</p></FormButton>
                <FormButton buttonColor={"#18A0FB"} onClick={() => {
                    onFormComplete(mediname, dosage, hr, min, handleExpand)
                }}><p style={{ color: "white" }}>{buttonText}</p> </FormButton>
            </div>
        </Content>
    </Container>
}

Form.defaultProps = {
    buttonText: "default",
    FormType: "default",
    onFormComplete: () => { },
    onFormClose: () => { },

}

export default Form;