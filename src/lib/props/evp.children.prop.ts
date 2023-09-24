import React from "react";
import { Indexable } from "../typings";

export type EvpCommonProps = Indexable<EvpCommon, any>;

export interface EvpCommon {
  children?: React.ReactNode,
  id?: string,
  class?: string;
  modal?: boolean;
  modalContent?: React.ReactNode;
  loading?: boolean;
}

export default EvpCommonProps