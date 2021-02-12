import React, { useState, useEffect } from "react";
import axios from "axios";

// import Alert from "comps/Alert"; //uncomment when we do completion
import Form from "comps/Form";
import Inform from "comps/Inform";
import MediCard from "comps/Medicard";
import Countdown from 'comps/Countdown';

// const meds = require("../api/medications.json");

const Main = () => {
  //Initial state for medications
  const [medications, setMedications] = useState([]);
  const [allMedications, setAll] = useState([]);
 
 var current_time = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit", hour12: false }));
 current_time = current_time.replace(":", "");
 current_time = parseInt(current_time);
 var add_hour = 60;
 var upcoming_time = current_time + add_hour;
 console.log(current_time);

const within = medications.filter(o=>parseInt(o.time) > current_time && parseInt(o.time) < upcoming_time);
console.log(within);

const upcoming = medications.filter(o=>parseInt(o.time) <= current_time || parseInt(o.time) >= upcoming_time)

  //User Interaction (submit form)
  const HandleFormComplete = async (
    mediname,
    dosage,
    // hr,
    // min,
    time,
    handleExpand
  ) => {
    //var time = hr + min;
    console.log({ mediname, dosage, time });

    var resp = await axios.post("https://medication-list-backend.herokuapp.com/api/medications", {mediname:mediname, dosage:dosage, time:time});
    console.log("create", resp);
    GetMedications();
    handleExpand();
  };

  //Retrieve medications
  const GetMedications = async () =>{
    var resp = await axios.get("https://medication-list-backend.herokuapp.com/api/medications");
    console.log("Get medications", resp);
    //update state
    // var arr = resp.data.slice(0,12)
    setMedications(resp.data.medications);
    setAll(resp.data.medications);
  }

 

  //Dummy data
  // const GetMedications = async() =>{
  //   var resp = await axios.get("../api/medications.json");
  //   var meds = resp.data.slice(0,12)
  //   setMedications(meds);
  //   setAll(resp.data);
  // }

   //User interaction (cancel form)
  const handleFormClose = (handleExpand) => {
    handleExpand();
  };

  const handleTime = () =>{
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
          onClickLatest={handleTime}
          onClickName={handleName}
        />
      </div>

      <div className="dashboard">

        <div className="medibox">
          <div className="medicont">
            <h3>Within the Hour</h3>
            {within.map((o) => {
              return (
                <MediCard
                  time={o.time}
                  mediname={o.mediname}
                  dosage={o.dosage}
                />
              );
            })}
          </div>

          <div className="secondMedicont">
            <h3>Upcoming</h3>
            {upcoming.map((o) => {
              return (
                <MediCard
                  time={o.time}
                  mediname={o.mediname}
                  dosage={o.dosage}
                />
              );
            })}
          </div>

          <div className="thirdMedicont">
            <h3>Completed</h3> {/* retrieve all for now */}
            {medications.map((o) => {
              return (
                <MediCard
                  time={o.time}
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


