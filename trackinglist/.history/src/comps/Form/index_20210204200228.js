import React, { useState} from "react";
import styled from 'styled-components';
import { AiOutlinePlus } from 'react-icons/ai';
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
const Icon = styled.img`
    width:auto;
    height:30px;
    display:flex;
    align-items:center;
    padding:10px;
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
    padding-left:5px;
`;
const InputCont = styled.div`
    width:${props=>props.width ? props.width : "330px"};
    height:${props=>props.height ? props.height : "40px"};
    margin-top:20px;
`;
const FormButton = styled.button`
    width:100px;
    height:36px;
    border-radius:12px;
    border:none;
    background-color:${props=>props.buttonColor ? props.buttonColor : "#e8e8e8"};
    margin-top:40px;
    margin-bottom:20px;
    display:flex;
    align-items:center;
    justify-content:center;
`;
const Close = styled.div`
    width:auto;
    height:auto;
    padding-left:30px;
    padding-right:30px;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`;
const Title = styled.text`
    display:${(props) => (props.display1 ? "flex" : "none")};
`;
const Icon1 = styled.div`
    display:${(props) => (props.display2 ? "flex" : "none")};
    padding-left:10px;
`;
const Icon2 = styled.div`
    display:${(props) => (props.display3 ? "none" : "flex")};
`;

const Form = ({buttonText, FormType, onFormComplete, onFormClose}) => {

    const [expand, setExpand] = useState(true);
    const [display1, setDisplay1] = useState(true);
    const [display2, setDisplay2] = useState(true);
    const [display3, setDisplay3] = useState(true);

    const [medication, setMedication] = useState("");
    const [dosage, setDosage] = useState("");
    const [hour, setHour] = useState("");
    const [minute, setMinute] = useState("");

    const handleExpand = () =>{
        setExpand(!expand);
        setDisplay1(!display1);
        setDisplay2(!display2);
        setDisplay3(!display3);
    }

    return<Container >
                <Close onClick={handleExpand}>
                    <Title display1={display1}><h3>Add Medication</h3></Title>
                    <Icon1 display2={display2}><AiOutlinePlus size={25} /></Icon1>
                    <Icon2 display3={display3}><IoIosArrowUp size={35} /></Icon2>
                </Close>
            <Content expand={expand}>
                    <WordCont><h4>{FormType}</h4>  </WordCont>
                    <WordCont ><h4 style={{color: "grey"}}>Medication Name</h4></WordCont>
                    <InputCont><FormInput type='text' style={{fontSize: "16px"}} onChange={(e)=>{
                        setMedication(e.target.value);
                    }}/></InputCont>
                    <WordCont ><h4 style={{color: "grey"}}>Dosage</h4></WordCont>
                    <InputCont><FormInput type='number' placeholder="mg"style={{fontSize: "16px"}} onChange={(e)=>{
                        setDosage(e.target.value);
                    }}/></InputCont>
                    <div style={{display:"flex", flexDirection:"row", width:"100%", color:"grey"}}><WordCont><h4>Hour</h4><h4 style={{paddingLeft: "30px"}}>Minute</h4></WordCont></div>
                    <div style={{width: "100%", display: "flex", flexDirection:"row"}}>   
                    <InputCont height={"40px"} width={"50px"}><FormInput type="number"style={{fontSize: "20px"}} onChange={(e)=>{
                        setHour(e.target.value);
                    }}/></InputCont>
                    <InputCont style={{paddingLeft: "20px"}} height={"40px"} width={"50px"}><FormInput type="number"style={{fontSize: "20px"}} onChange={(e)=>{
                        setMinute(e.target.value);
                    }}/></InputCont>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", width:"100%", justifyContent:"space-evenly"}}>
                    <FormButton onClick={()=>{
                        onFormClose(handleExpand)
                    }}><p>Cancel</p></FormButton>
                    <FormButton buttonColor={"#18A0FB"} onClick={()=>{
                        onFormComplete(medication, dosage, hour, minute, handleExpand)
                    }}><p style={{color:"white"}}>{buttonText}</p> </FormButton>
                    </div>
            </Content>
    </Container>
}

Form.defaultProps = {
    buttonText:"default",
    FormType:"default",
    onFormComplete:()=>{},
    onFormClose:()=>{},

}

export default Form;