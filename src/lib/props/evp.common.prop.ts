import React from "react";
import { Indexable } from "../typings";

export type EvpCommonProps = Indexable<EvpCommon, any>;

export interface EvpCommon {
  children?: React.ReactNode,
  id?: string,
  class?: string;
  key?: any;
  modal?: boolean;
  modalContent?: React.ReactNode;
  loading?: boolean;
  hidden?: boolean;
}

export default EvpCommonProps