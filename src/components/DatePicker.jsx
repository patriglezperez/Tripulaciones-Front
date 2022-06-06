import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
export function DatePicker({ dataFromChild }) {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <DateTimePicker
        onChange={onChange}
        onCalendarClose={() => dataFromChild(value)}
        onClockClose={() => dataFromChild(value)}
        value={value}
        isCalendarOpen={true}
        //tileContent is the info that will be displayed together with the day view
        tileContent={({ date, view }) =>
          view === "month" && date.getDay() === 0 ? <p>It's Sunday!</p> : null
        }
      />
    </>
  );
}
