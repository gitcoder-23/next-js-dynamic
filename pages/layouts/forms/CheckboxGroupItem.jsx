import React from "react";
import { useCheckboxContext } from "./CheckboxContext";


export default function CheckboxGroupItem({ value, label }) {
  const { field, helpers } = useCheckboxContext();
  const checked = Boolean(field.value && field.value.find((_) => _ === value));
  return (
    <label style={{ display: "block" }}>
      <input
      className="con-radio"
        {...field}
        type="checkbox"
        checked={checked}
        onChange={() => {
          if (checked) {
            helpers.setValue(field.value.filter((_) => _ !== value));
          } else {
            helpers.setValue([...field.value, value]);
          }
        }}
      /> &nbsp;
      {label}
    </label>
  );
}
