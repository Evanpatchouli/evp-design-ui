import React from "react";

export type EvpCommonProps = Indexable<EvpCommon, any>;

export interface EvpCommon {
  children: React.ReactNode,
  id?: string,
  class?: string
}

export default EvpCommonProps