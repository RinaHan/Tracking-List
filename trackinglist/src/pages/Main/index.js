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

const meds = require("../api/medications.json");

const Main = () => {
  //Initial state for medications
  const [medications, setMedications] = useState([]);
  const [allMedications, setAll] = useState(meds);
 
//  var current_time = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }));
//  var add_hour = 60
//  var upcoming_time = (+current_time) + (+add_hour);
//  console.log(upcoming_time);

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

  //Dummy data
  const GetMedications = async() =>{
    var resp = await axios.get("../api/medications.json");
    var meds = resp.data.slice(0,12)
    setMedications(meds);
    setAll(resp.data);
  }

  const handleFormClose = (handleExpand) => {
    handleExpand();
  };

  const handleLatest = () =>{
    setMedications(
      allMedications.sort(sortByTime)
    )
  }
  const handleName = () =>{
    setMedications(
      allMedications.sort(sortByName)
    )
  }

  //On page load, app gets medications
  useEffect(()=>{
    GetMedications();
  }, []);

  return (
    <div className="main">

      <div className="inform">
        <Inform 
          onClickLatest={handleLatest}
          onClickName={handleName}
        />
      </div>

      <div className="dashboard">

        <div className="medibox">
        <div className="medicont">
          <h3>Within the Hour</h3>
          {medications.map((o) => {
            return (
              <MediCard
                hr={o.hr}
                min={o.min}
                mediname={o.mediname}
                dosage={o.dosage}
                // bgcolor={"#dad"}
              />
            );
          })}
        </div>

        <div className="secondMedicont">
          <h3>Upcoming</h3>
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
        </div>

      <div className="form">
        <Form
          onFormComplete={HandleFormComplete}
          onFormClose={handleFormClose}
          buttonText="Update"
        />
      </div>
        
      </div>

    </div>
  );
};

export default Main;

function sortByTime(a,b){
  if(a.time > b.time){
      return 1;
  }else if(a.time < b.time){
      return -1;
  }else{
      return 0;
  }
}
function sortByName(a,b){
  if(a.mediname > b.mediname){
      return -1;
  }else if(a.mediname < b.mediname){
      return 1;
  }else{
      return 0;
  }
}


