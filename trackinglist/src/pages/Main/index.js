import React from "react";
import Alert from "comps/Alert";
import BigButton from "comps/BigButton";
import SmallButton from "comps/SmallButton";
import Form from "comps/Form";
import Inform from "comps/Inform";
import MediCont from "comps/Medicont";
import MediCard from "comps/Medicard";
import Inputs from "comps/Inputs";
import { MdDone, MdAdd } from "react-icons/md";

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
      <div className="inform">
        <Inform />
      </div>

      <div className="dashboard">
        
        <div className="mediconts">
          <div className="column">
            <MediCont  />
          </div>

          {/* <div className="column">
            <MediCont  bgcolor="#DFFAED" when="Upcoming" />
          </div> */}
          
        </div>
        <div className="button">
        <BigButton label="Add New Medication" icon="MdAdd" />
        </div>

        {/* <div className="form">
          <Form />
        </div> */}

      </div>
    </div>
  );
};

export default Main;
