import { createContext } from "react";
import { EvpFormInstance, FormStore } from "./hooks";

// @ts-ignore
const EvpFormContext = createContext<EvpFormInstance>(new FormStore());

export default EvpFormContext;