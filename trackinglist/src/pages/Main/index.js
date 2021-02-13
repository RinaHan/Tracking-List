import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Alert from "comps/Alert";
import Form from "comps/Form";
import Inform from "comps/Inform";
import MediCard from "comps/Medicard";

import { MdPermDeviceInformation } from "react-icons/md";

import Countdown from "comps/Countdown";

// const meds = require("../api/medications.json");

const Main = ({}) => {
  const ref = useRef(null);

  const handleAlert = () => {
    ref.current.showAlert();
  };

  //Initial state for medications
  const [medications, setMedications] = useState([]);
  const [allMedications, setAll] = useState([]);

  //get current time &&  the time 1 hour into the future
  var current_time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  current_time = current_time.replace(":", "");
  current_time = parseInt(current_time);
  console.log(medications);
  console.log(current_time);
  //comment lines 30-34 to use alert modal

  // var current_time = 2359; //comment this out to see filtering
  var upcoming_time = current_time + 100;

  //filter only medications that are between the current time and an hour into the future
  const hour = medications.filter(
    (o) =>
      parseInt(o.time.replace(":", "")) > current_time &&
      parseInt(o.time.replace(":", "")) <= upcoming_time
  );
  //filter only medications that are greater than an hour into the future & before midnight
  const hasnt = medications.filter(
    (o) =>
      parseInt(o.time.replace(":", "")) > upcoming_time &&
      parseInt(o.time.replace(":", "")) < 2400
  );
  //filter only medications that are less than the current time && return alert comp
  const has = medications.filter(
    (o) =>
      parseInt(o.time.replace(":", "")) <= current_time &&
      parseInt(o.time.replace(":", "")) > 0
  );

  for (let i = 0; i < medications.length; i++) {
    const medication = medications[i];
    if (medication.time.replace(":", "") == current_time) {
      console.log("true");
      handleAlert();
    } else {
      console.log("false");
    }
  }

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

    var resp = await axios.post(
      "https://medication-list-backend.herokuapp.com/api/medications",
      { mediname: mediname, dosage: dosage, time: time }
    );

    console.log("create", resp);
    GetMedications();
    handleExpand();
  };

  //Retrieve medications
  const GetMedications = async () => {
    var resp = await axios.get(
      "https://medication-list-backend.herokuapp.com/api/medications"
    );
    console.log("Get medications", resp);
    //update state
    // var arr = resp.data.slice(0,12)
    setMedications(resp.data.medications);
    setAll(resp.data.medications);
  };

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

  // Sorting Functions
  function handleTime() {
    setMedications(
      allMedications.sort((a, b) => {
        if (a.time > b.time) {
          return 1;
        } else if (a.time < b.time) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  }

  function handleName() {
    setMedications(
      allMedications.sort((a, b) => {
        if (a.mediname > b.mediname) {
          return 1;
        } else if (a.mediname < b.mediname) {
          return -1;
        } else {
          return 0;
        }
      })
    );
  }

  console.log(allMedications);

  //On page load, app gets medications
  useEffect(() => {
    GetMedications();
  }, []);

  return (
    <div className="main">
      <div className="content">
        <div className="inform">
          <Inform onClickLatest={handleTime} onClickName={handleName} />
    

        
          <div className="filtercont"></div>
            <span style={{paddingRight:"20px"}}>Sort by</span>
            <button style={{marginRight:"20px"}} className="filterBtn" onClick={handleTime}>By Time</button>
            <button className="filterBtn" onClick={handleName}>By Name</button>
          </div>
    

          {/* <div className="alert">
            <Alert ref={ref} />
          </div> */}
          {/* Works with these buttons in console... */}
   

        

        <div className="mediconts">
          <div className="firstMedicont">
            <h3>Within the Hour</h3>
            {hour.map((o) => {
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
            {hasnt.map((o) => {
              return (
                <MediCard
                  time={o.time}
                  mediname={o.mediname}
                  dosage={o.dosage}
                  cardcolor="#F6A860"
                  bgcolor="#FAF2DF"
                  btcolor="#F6A860"
                  hovercolor="#e0876a"
                />
              );
            })}
          </div>

          <div className="thirdMedicont">
            <h3>Completed</h3> {/* retrieve all for now */}
            {has.map((o) => {
              return (
                <MediCard
                  time={o.time}
                  mediname={o.mediname}
                  dosage={o.dosage}
                  cardcolor="#6ABDD7"
                  bgcolor="#DFFAED"
                  btcolor="#6ABDD7"
                  hovercolor="#009acd"
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
