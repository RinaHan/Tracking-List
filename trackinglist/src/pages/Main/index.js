import React from "react";
import Alert from "comps/Alert";
import BigButton from "comps/BigButton";
import SmallButton from "comps/SmallButton";
import Form from "comps/Form";
import Inform from "comps/Inform";
import MediCont from "comps/MediCont";
import MediCard from "comps/MediCard";
import Inputs from "comps/Inputs";

const Main = () => {
  const HandleFormComplete = async (
    medication,
    dosage,
    hour,
    minute,
    handleExpand
  ) => {
    console.log(medication, dosage, hour, minute);
    handleExpand();
  };
  const handleFormClose = (handleExpand) => {
    handleExpand();
  };

  return (
    <div className="main">
      <Alert className="alert" />
      <div className="buttons">
        <BigButton label="Completed" icon="MdDone" />
        <BigButton label="Add New Medication" icon="MdAdd" />

        <SmallButton label="Cancel" buttonBg="#E6E6E6" width="110px" />
        <SmallButton label="Add" buttonBg="#18A0FB" width="110px" />
        <SmallButton label="AM" buttonBg="#4DC2A6" width="75px" />
        <SmallButton label="PM" buttonBg="#E6E6E6" width="75px" />
      </div>
      <div className="form">
        <Form
          onFormComplete={HandleFormComplete}
          onFormClose={handleFormClose}
        />
      </div>
      <Inform className="inform" />
      <MediCont className="medicont" />
      <MediCont className="medicont" bgcolor="#DFFAED" />
      <Inputs className="Inputs" />
    </div>
  );
};

export default Main;
