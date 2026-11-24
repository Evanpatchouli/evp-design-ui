import React from "react";

export type RadioGroupContextType = {
  name?: string;
  value?: string | number;
  default?: string | number;
};

const Context = React.createContext<RadioGroupContextType>({
  name: "",
});

export default Context;
