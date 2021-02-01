import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Container = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    max-width: 325px;

    p {
        color: #0000008C;
    }
`;

const Filtering = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 15px;
`;

const FilterBtn = styled.button`
    background-color:${props=>props.bgcolor ? props.bgcolor : "#4DC2A6"};
    color:${props=>props.color ? props.color : "#FFFFFF"};
    min-width: 85px;
    height: 26px;
    max-width: 85px;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
`;



const Inform = () => {
    const [currentDate, setCurrentDate] = useState([]);

    useEffect(() => {
        var date = moment().format('ddd, MMM Do');
        setCurrentDate(date);
      }, []);

    return<Container>
        <h1>{currentDate}</h1>
        <p>Welcome back! Here are your medications for today.</p>
        <Filtering>
            <h5>Sort by</h5>
            <FilterBtn>Latest</FilterBtn>
            <FilterBtn bgcolor={"#C4C4C473"} color="#00000073">Name</FilterBtn>
        </Filtering>
    </Container>
}

Inform.defaultProps = {

}

export default Inform;