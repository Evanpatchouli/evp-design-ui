import React from "react";
export type RadioGroupContextType = {
    name?: string;
    value?: string | number;
    default?: string | number;
};
declare const Context: React.Context<RadioGroupContextType>;
export default Context;
