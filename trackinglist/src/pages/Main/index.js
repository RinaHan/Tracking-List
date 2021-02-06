import React, {useState, useEffect} from "react";
import axios from 'axios'

import Alert from "comps/Alert";
import BigButton from "comps/BigButton";
import SmallButton from "comps/SmallButton";
import Form from "comps/Form";
import Inform from "comps/Inform";
import MediCont from "comps/Medicont";
import MediCard from "comps/Medicard";
import Inputs from "comps/Inputs";




const Main = () => {

  //Initial state for medications
  // const [medications, setMedications] = useState([]);
  const [allMedications, setAll] = useState([]);

//we need a function to comepare time:"" to current time

//get the array "medications" from db
//create var for the current time of day
//loop through they array
//compare medications.time to the current time
//if medication.time == var current_time + 60 minutes
//within.push()
//else if medication.time == current_time
//upcoming.push(medication)

const SortByTime = () => {
  var meds = medications
  
}


  //User Interaction (submit form)
  const HandleFormComplete = async (mediname,dosage,hr,min,handleExpand) => {
    var time = hr + min;
    console.log({mediname, dosage, time});

    // var resp = await axios.post("https://medication-list-backend.herokuapp.com/api/medications", {mediname:mediname, dosage:dosage, hr:hr, min:min, xm:xm});
    // console.log("create", resp);
    // GetMedications();
    handleExpand();
  };

  //Retrieve medications
  // const GetMedications = async () =>{
  //   var resp = await axios.get("https://medication-list-backend.herokuapp.com/api/medications");
  //   console.log("Get medications", resp);
  //   //update state
  //   setMedications(resp.data);
  // } 

  //User interaction (cancel form)
  const handleFormClose = (handleExpand) => {
    handleExpand();
  };

  //On page load, app gets medications
  // useEffect(()=>{
  //   GetMedications();
  // }, []);

  const medications = [{
    mediname:"ian",
    dosage:"2",
    hr:"10",
    min:"20"
  },
  {
    mediname:"farhaz",
    dosage:"23",
    hr:"1",
    min:"2"
  },
  {
    mediname:"sophia",
    dosage:"23",
    hr:"1",
    min:"2"
  },
  {
    mediname:"rina",
    dosage:"23",
    hr:"1",
    min:"2"
  }
];

const within =[{

}]
const upcoming =[{
  
}]



  return (
    <div className="main">
        
        <div className="dashboard">
            {/* LEFT COLUMN */}
            <div className="column">
                <Inform className="inform" />
                <div className="medicont">
                <h3>Within the Hour</h3>
        {medications.map(o=>{
                      return  <MediCard 
                      hr={o.hr}
                      min={o.min}
                      mediname={o.mediname}
                      dosage={o.dosage}
                      />;
                    })}
        
                </div> 
            </div>

            {/* MIDDLE COLUMN */}
            <div className="column columnTwo">
                <div className="medicont">
                <h3>Upcoming</h3>
                {medications.map(o=>{
                      return  <MediCard 
                      hr={o.hr}
                      min={o.min}
                      mediname={o.mediname}
                      dosage={o.dosage}
                      />;
                    })}
                </div>
            </div>

            {/* RIGHT COLUMN (REMOVE) */}
            <div className="column">
                <Alert className="alert" />
                <div className="buttons">
                    {/* <BigButton label="Completed" icon="MdDone" />
                    <BigButton label="Add New Medication" icon="MdAdd" />

                    <SmallButton label="Cancel" buttonBg="#E6E6E6" width="110px" />
                    <SmallButton label="Add" buttonBg="#18A0FB" width="110px" />
                    <SmallButton label="AM" buttonBg="#4DC2A6" width="75px" />
                    <SmallButton label="PM" buttonBg="#E6E6E6" width="75px" /> */}
                </div>
            </div>
        </div>

        <div className="form">
        <Form
          onFormComplete={HandleFormComplete}
          onFormClose={handleFormClose}
          buttonText="Update" />
      </div>


{/* COMPS */}
      {/* <Alert className="alert" />
      <div className="buttons">
        <BigButton label="Completed" icon="MdDone" />
        <BigButton label="Add New Medication" icon="MdAdd" />

        <SmallButton label="Cancel" buttonBg="#E6E6E6" width="110px" />
        <SmallButton label="Add" buttonBg="#18A0FB" width="110px" />
        <SmallButton label="AM" buttonBg="#4DC2A6" width="75px" />
        <SmallButton label="PM" buttonBg="#E6E6E6" width="75px" />
      </div> */}
      {/* <div className="form">
        <Form
          onFormComplete={HandleFormComplete}
          onFormClose={handleFormClose}
          buttonText="Update" />
      </div> */}
      {/* <Inform className="inform" /> */}
      {/* <MediCont className="medicont" /> */}
      {/* <MediCont className="medicont" bgcolor="#DFFAED" /> */}
      {/* <Inputs className="Inputs" /> */}
    </div>
  );
};



export default Main;
