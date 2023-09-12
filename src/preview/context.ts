import { createContext } from "react";

export type PreContextModel = {
  pageName?: string
}

const PreContext = createContext<PreContextModel|undefined>(undefined);

export default PreContext;