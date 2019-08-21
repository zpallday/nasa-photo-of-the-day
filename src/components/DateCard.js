import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from "styled-components";


const DayPicker = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 45%;
  aligh-item:center;

`



const DateDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 43%;
  aligh-item:center;
`
  const MainTitle = styled.h1`
    font-size: 2.5rem;
    margin-right: 8px;

`



function forDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export default function DatePicker({setDate}) {
    return (
      <DateDiv>
        <MainTitle>The Universe</MainTitle>
        <DayPicker>
        <DayPickerInput onDayChange={day => setDate(forDate(day))} />
        </DayPicker>
      </DateDiv>
    );
}

