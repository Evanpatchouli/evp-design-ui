import React from "react";

export type CheckboxGroupContextType = {
  name?: string;
  value?: string | number | readonly string[];
  default?: string | number | readonly string[];
}

const Context = React.createContext<CheckboxGroupContextType>({
  name: ''
})

export default Context;
