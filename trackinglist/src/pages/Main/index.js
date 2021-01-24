import React from 'react';
import Medicont from 'comps/Medicont';
import Alert from 'comps/Alert';
import Buttons from 'comps/Buttons';
import Form from 'comps/Form';
import Inform from 'comps/Inform';
import Medicard from 'comps/Medicard';
import Inputs from 'comps/Inputs';

const Main = () => {
    return <div className="main">
        <Medicont className="medicont"/>
        <Alert className="alert"/>
        <Buttons className="buttons" />
        <Form className="form"/>
        <Inform className="inform"/>
        <Medicard className="medicard"/>
        <Inputs className="Inputs"/>
    </div>
}

export default Main;
