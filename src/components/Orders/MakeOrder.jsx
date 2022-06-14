import React from "react";
import { useState } from "react";
import DatePicker from "../DatePicker";

export const MakeOrder = () => {
  const [value, setValue] = useState();
  //gets the Date from DatePicker component
  function dataFromChild(date) {
    setValue(date);
  }
  console.log(value);

  return (
    <div className="make-order">
      <DatePicker dataFromChild={dataFromChild} />

      <button>Submit</button>
    </div>
  );
};
