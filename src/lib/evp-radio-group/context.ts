import React from "react";

export type RadioGroupContextType = {
  name?: string;
}

const Context = React.createContext<RadioGroupContextType>({
  name: ''
})

export default Context;