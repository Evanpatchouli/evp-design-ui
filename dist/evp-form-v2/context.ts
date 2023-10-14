import { createContext } from "react";
import { EvpFormInstance } from "./hooks";

const EvpFormContext = createContext<EvpFormInstance|undefined>(undefined);

export default EvpFormContext;