import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';






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
      <div>
        <h1>Show me the universe on:  </h1>
        <DayPickerInput onDayChange={day => setDate(forDate(day))} />
      </div>
    );
}

