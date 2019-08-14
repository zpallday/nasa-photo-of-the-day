import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';






function forDate(date) {
const d = new Date(date),
month = '' + (d.getMonth() + 2),
day = ' ' + d.getDate(),
year = ' ' + d.getFullYear();

if (month.length < 2) month = '0' + month;
if (day.length < 2) day = '0' + day;

return [year, month, day].join('-')

}

export default function DateCard({setState}) {
        return (
            <>
           <h1>The universe:  </h1>
            <p onDayChange={day => setState(forDate(day))} />
      </>
        )
};
      
