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
 
//  var current_time = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }));
//  var add_hour = 60
//  var upcoming_time = (+current_time) + (+add_hour);
//  console.log(upcoming_time);

 const medications = [
  {
      "id": 1,
      "mediname": "Adderall",
      "dosage": "5",
      "time": "700",
      "completed": false
  },
  {
      "id": 2,
      "mediname": "Amlodipine",
      "dosage": "2.5",
      "time": "830",
      "completed": false
  },
  {
      "id": 3,
      "mediname": "Ativan",
      "dosage": "5",
      "time": "1000",
      "completed": false
  },
  {
      "id": 4,
      "mediname": "Benzonatate",
      "dosage": "5",
      "time": "1015",
      "completed": false
  },
  {
      "id": 5,
      "mediname": "Cephalexin",
      "dosage": "10",
      "time": "1145",
      "completed": false
  },
  {
      "id": 6,
      "mediname": "Clindamycin",
      "dosage": "2.5",
      "time": "1145",
      "completed": false
  },
  {
      "id": 7,
      "mediname": "Entresto",
      "dosage": "5",
      "time": "1215",
      "completed": false
  },
  {
      "id": 8,
      "mediname": "Hydrochlorothiazide",
      "dosage": "5",
      "time": "1330",
      "completed": false
  },
  {
      "id": 9,
      "mediname": "Ibuprofen",
      "dosage": "2.5",
      "time": "1445",
      "completed": false
  },
  {
      "id": 10,
      "mediname": "Lisinopril",
      "dosage": "5",
      "time": "1700",
      "completed": false
  },
  {
      "id": 11,
      "mediname": "Melatonin",
      "dosage": "5",
      "time": "2045",
      "completed": false
  },
  {
      "id": 12,
      "mediname": "Trazodone",
      "dosage": "5",
      "time": "2200",
      "completed": false
  }
];

// const within = medications.filter(o=>o.time > "12:00" && o.time < "13:00");

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

    // var resp = await axios.post("https://medication-list-backend.herokuapp.com/api/medications", {mediname:mediname, dosage:dosage, hr:hr, min:min});
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
            {medications.map((o) => {
              
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



