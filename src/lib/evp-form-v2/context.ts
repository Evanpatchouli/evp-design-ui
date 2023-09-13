import { createContext } from "react";
import { EvpFormInstance, FormStore } from "./hooks";

const EvpFormContext = createContext<EvpFormInstance>(new FormStore());

export default EvpFormContext;