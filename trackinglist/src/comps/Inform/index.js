import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const moment = require('moment');

const Container = styled.div`
    @media (max-width:1500px) and (min-width:825px) {
        width: 100%;
    }
    @media (max-width:825px) and (min-width:0) {
        width: 325px;
    }
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 5px;
    margin-left: 15px;
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
    background-color:${props=>props.bgcolor ? "#C4C4C473" : "#4DC2A6"};
    color:${props=>props.color ? "#00000073" : "#FFFFFF"};
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
    filter: brightness(1);
    :hover {
        cursor: pointer;
        filter: brightness(85%);
        transition: 300ms ease-in-out;
    }
`;

const Inform = ({onClickLatest, onClickName, onClick, byTime}) => {
    const [currentDate, setCurrentDate] = useState([]);
    const [bgcolor, setBgColor] = useState(true);
    const [color, setColor] = useState(true);

    const handleSwitch = () => {
        setBgColor(!bgcolor);
        setColor(!color)
    }

    useEffect(() => {
        var date = moment().format('dddd, MMM Do');
        setCurrentDate(date);
      }, []);

    return<Container>
        <h1>{currentDate}</h1>
        <p>Welcome back! Here are your medications for today.</p>
        <Filtering>
            <h5>Sort by</h5>
            <FilterBtn color={!color} bgcolor={!bgcolor} onClickCapture={()=>{
                handleSwitch(); // onClickLatest();
                onClick={byTime}
            }}>Latest</FilterBtn>
            <FilterBtn color={color} bgcolor={bgcolor} onClick={()=>{
                handleSwitch(); onClickName();
            }}>Name</FilterBtn>
        </Filtering>
    </Container>
}

Inform.defaultProps = {
    //onClickLatest:()=>{},
    onClickName:()=>{},
    byTime:{},
}

export default Inform;