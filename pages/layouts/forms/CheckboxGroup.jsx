import { ErrorMessage, useField } from "formik";
import React, { ReactNode } from "react";
import Item from "./CheckboxGroupItem";
import { CheckboxProvider } from "./CheckboxContext";


function CheckboxGroup({ name, label, children }) {
  const [field, meta, helpers] = useField(name);
  return (
    <CheckboxProvider value={{ field, helpers, meta }}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        <ErrorMessage
          name={name}
          render={(msg) => <span style={{ color: "red" }}>{msg}</span>}
        />
      </fieldset>
    </CheckboxProvider>
  );
}

export default Object.assign(CheckboxGroup, { Item });
