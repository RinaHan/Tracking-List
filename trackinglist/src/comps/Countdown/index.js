import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: #fff;
  display: flex;
  flex-direction:row;
  width: 100%;
  height: 100%;
  background-color: black;
  align-items: center;
  justify-content: center;
`;

const Bold = styled.div`
  font-weight: 700;
  font-size: 16px;
  text-align: right;
`;

const HourNum = styled.div``;

const MinNum = styled.div`
    padding: 7px 0;
`;

const SecNum = styled.div``;

const NormalFont = styled.div`
  font-size: 10px;
  padding-left: 10px;
  text-align: left;
`;

const HR = styled.div``;

const MIN = styled.div`
  padding: 15px 0;
`;

const SEC = styled.div``;

const Countdown = ({time}) => {

    const medications = [
        {}
    ];

    const [countdownDate, setCountdownDate] = useState(time);

    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);

    const setNewTime = () => {
        console.log(new Date())
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

            setState({ days: days, hours: hours, minutes, seconds });
        }
        
    };

    return (
        <Container>
            {medications.map(o=>
                <Bold>
                    <HourNum id="hr">{state.hours || '00'}</HourNum>
                    <MinNum id="min">{state.minutes || '00'}</MinNum>
                    <SecNum id="sec">{state.seconds || '00'}</SecNum>
                </Bold>
            )}
            <NormalFont>
                <HR>HR</HR>
                <MIN>MIN</MIN>
                <SEC>SEC</SEC>
            </NormalFont>
        </Container>
    )
}

Countdown.defaultProps = {
}

export default Countdown;