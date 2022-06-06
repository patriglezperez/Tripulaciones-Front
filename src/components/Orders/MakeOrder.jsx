import React from "react";
import { useState } from "react";
import { DatePicker } from "../DatePicker";

export const MakeOrder = () => {
  const [value, setValue] = useState();
  //gets the Date from DatePicker component
  function dataFromChild(date) {
    setValue(date);
  }

  return <DatePicker dataFromChild={dataFromChild} />;
};
