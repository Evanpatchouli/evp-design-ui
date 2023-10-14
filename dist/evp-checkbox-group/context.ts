import React from "react";

export type CheckboxGroupContextType = {
  name?: string;
}

const Context = React.createContext<CheckboxGroupContextType>({
  name: ''
})

export default Context;