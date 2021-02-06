import React, { useState, useEffect } from "react";
import axios from "axios";

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
  //Initial state for medications
  // const [medications, setMedications] = useState([]);

  //reset medications
  // const [allMedications, setAll] = useState([]);

  //we need a function to comepare time:"" to current time

  //get the array "medications" from db
  //create var for the current time of day
  //loop through they array
  //compare medications.time to the current time
  //if medication.time == var current_time + 60 minutes
  //within.push()
  //else if medication.time == current_time
  //upcoming.push(medication)

 
 var current_time = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }));
 var add_hour = 60
 var upcoming_time = Number(current_time) + Number(add_hour);
 console.log(current_time);

const medications = [
  {
    mediname: "ian",
    dosage: "2",
    time:"14:15"
  },
  {
    mediname: "farhaz",
    dosage: "23",
    time:"12:15"
  },
  {
    mediname: "sophia",
    dosage: "23",
    time:"12:15"
  },
  {
    mediname: "rina",
    dosage: "23",
    time:"11:15"
  },
];


const within = medications.filter(o=>o.time > "12:00" && o.time < "13:00");

const upcoming = medications.filter(o=>o.time > current_time);






  //User Interaction (submit form)
  const HandleFormComplete = async (
    mediname,
    dosage,
    hr,
    min,
    handleExpand
  ) => {
    var time = hr + min;
    console.log({ mediname, dosage, time });

    // var resp = await axios.post("../", {mediname:mediname, dosage:dosage, hr:hr, min:min});
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





  return (
    <div className="main">
      <div className="inform">
        <Inform />
      </div>

        {/* LEFT COLUMN */}
      {/* <div className="dashboard"> */}
        <div className="dashboard">
         
          <div className="medicont">
            <h3>Within the Hour</h3>
            {upcoming.map((o) => {
              
              return (
                <MediCard
                  hr={o.hr}
                  min={o.min}
                  mediname={o.mediname}
                  dosage={o.dosage}
                />

              );
            })}
          </div>
        {/* </div> */}

        {/* MIDDLE COLUMN */}
        <div className="column columnTwo">
          <div className="medicont">
            <h3>Upcoming</h3>
            {within.map((o) => {
              return (
                <MediCard
                  hr={o.hr}
                  min={o.min}
                  mediname={o.mediname}
                  dosage={o.dosage}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="form">
        <Form
          onFormComplete={HandleFormComplete}
          onFormClose={handleFormClose}
          buttonText="Update"
        />
      </div>
    </div>
  );
};

export default Main;



