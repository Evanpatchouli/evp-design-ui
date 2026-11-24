import React from "react";
export type CheckboxGroupContextType = {
    name?: string;
    value?: string | number | readonly string[];
    default?: string | number | readonly string[];
};
declare const Context: React.Context<CheckboxGroupContextType>;
export default Context;
