import React from "react";
import { ArrayLengthed } from "../utils";
import { Color } from "../constant";

export type EvpStyleProps = Indexable<EvpStyle, any>

export default EvpStyleProps;

export interface EvpStyle {
  id?: string,
  class?: string,
  style?: React.CSSProperties,
  color?: Hintable<Color>,
  fontSize?: Hintable<EvpFontSize>,
  fontWeight?: Hintable<EvpFontWeight>
  bgColor?: Hintable<Color>,

  cursor?: EvpCursorRule,
  'pointer'?: boolean,
  'not-allowed'?: boolean,
  'col-resize'?: boolean,
  'row-resize'?: boolean,
  'all-scroll'?: boolean,
  'text'?: boolean,
  'wait'?: boolean,
  'grab'?: boolean,
  'grabbing'?: boolean,
  'none'?: boolean,

  border?: EvpBorderRule,
  boxShadow?: string,

  zIndex?: number,

  position?: EvpPositionRule,
  top?: number | string,
  right?: number | string,
  bottom?: number | string,
  left?: number | string,
  
  display?: EvpDisplayRule,
  flexDirection?: EvpFlexDirectionRule,
  justifyContent?: EvpJustifyContentRule,
  alignItems?: EvpAlignItemsRule,
  /** The unit is number when assigned with a number*/
  w?: EvpWRule,
  /** The unit is number when assigned with a number*/
  h?: EvpHRule,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  pd?: ArrayLengthed<string|number|undefined|null, 4> | number,
  /** This array should have 4 items, but less is also ok. If a member in this array has type of `number` it will be parsed to `${value}px` */
  mg?: ArrayLengthed<string|number|undefined|null, 4> | number,

  pd_2?: boolean,
  pd_4?: boolean,
  pd_6?: boolean,
  pd_8?: boolean,
  pd_10?: boolean,
  pd_12?: boolean,
  pd_14?: boolean,
  pd_16?: boolean,
  pd_18?: boolean,
  pd_20?: boolean,
  pd_22?: boolean,
  pd_24?: boolean,
  pd_26?: boolean,
  pd_28?: boolean,
  pd_30?: boolean,
  pd_32?: boolean,
  pd_34?: boolean,
  pd_36?: boolean,
  pd_38?: boolean,
  pd_40?: boolean,
  pd_50?: boolean,
  pd_60?: boolean,
  pd_70?: boolean,
  pd_80?: boolean,
  pd_90?: boolean,
  pd_100?: boolean,
  pd_120?: boolean,
  pd_140?: boolean,
  pd_160?: boolean,
  pd_180?: boolean,
  pd_200?: boolean,
  pd_300?: boolean,
  pd_400?: boolean,

  pdt_2?: boolean,
  pdt_4?: boolean,
  pdt_6?: boolean,
  pdt_8?: boolean,
  pdt_10?: boolean,
  pdt_12?: boolean,
  pdt_14?: boolean,
  pdt_16?: boolean,
  pdt_18?: boolean,
  pdt_20?: boolean,
  pdt_22?: boolean,
  pdt_24?: boolean,
  pdt_26?: boolean,
  pdt_28?: boolean,
  pdt_30?: boolean,
  pdt_32?: boolean,
  pdt_34?: boolean,
  pdt_36?: boolean,
  pdt_38?: boolean,
  pdt_40?: boolean,
  pdt_50?: boolean,
  pdt_60?: boolean,
  pdt_70?: boolean,
  pdt_80?: boolean,
  pdt_90?: boolean,
  pdt_100?: boolean,
  pdt_120?: boolean,
  pdt_140?: boolean,
  pdt_160?: boolean,
  pdt_180?: boolean,
  pdt_200?: boolean,
  pdt_300?: boolean,
  pdt_400?: boolean,

  pdr_2?: boolean,
  pdr_4?: boolean,
  pdr_6?: boolean,
  pdr_8?: boolean,
  pdr_10?: boolean,
  pdr_12?: boolean,
  pdr_14?: boolean,
  pdr_16?: boolean,
  pdr_18?: boolean,
  pdr_20?: boolean,
  pdr_22?: boolean,
  pdr_24?: boolean,
  pdr_26?: boolean,
  pdr_28?: boolean,
  pdr_30?: boolean,
  pdr_32?: boolean,
  pdr_34?: boolean,
  pdr_36?: boolean,
  pdr_38?: boolean,
  pdr_40?: boolean,
  pdr_50?: boolean,
  pdr_60?: boolean,
  pdr_70?: boolean,
  pdr_80?: boolean,
  pdr_90?: boolean,
  pdr_100?: boolean,
  pdr_120?: boolean,
  pdr_140?: boolean,
  pdr_160?: boolean,
  pdr_180?: boolean,
  pdr_200?: boolean,
  pdr_300?: boolean,
  pdr_400?: boolean,

  pdb_2?: boolean,
  pdb_4?: boolean,
  pdb_6?: boolean,
  pdb_8?: boolean,
  pdb_10?: boolean,
  pdb_12?: boolean,
  pdb_14?: boolean,
  pdb_16?: boolean,
  pdb_18?: boolean,
  pdb_20?: boolean,
  pdb_22?: boolean,
  pdb_24?: boolean,
  pdb_26?: boolean,
  pdb_28?: boolean,
  pdb_30?: boolean,
  pdb_32?: boolean,
  pdb_34?: boolean,
  pdb_36?: boolean,
  pdb_38?: boolean,
  pdb_40?: boolean,
  pdb_50?: boolean,
  pdb_60?: boolean,
  pdb_70?: boolean,
  pdb_80?: boolean,
  pdb_90?: boolean,
  pdb_100?: boolean,
  pdb_120?: boolean,
  pdb_140?: boolean,
  pdb_160?: boolean,
  pdb_180?: boolean,
  pdb_200?: boolean,
  pdb_300?: boolean,
  pdb_400?: boolean,

  pdl_2?: boolean,
  pdl_4?: boolean,
  pdl_6?: boolean,
  pdl_8?: boolean,
  pdl_10?: boolean,
  pdl_12?: boolean,
  pdl_14?: boolean,
  pdl_16?: boolean,
  pdl_18?: boolean,
  pdl_20?: boolean,
  pdl_22?: boolean,
  pdl_24?: boolean,
  pdl_26?: boolean,
  pdl_28?: boolean,
  pdl_30?: boolean,
  pdl_32?: boolean,
  pdl_34?: boolean,
  pdl_36?: boolean,
  pdl_38?: boolean,
  pdl_40?: boolean,
  pdl_50?: boolean,
  pdl_60?: boolean,
  pdl_70?: boolean,
  pdl_80?: boolean,
  pdl_90?: boolean,
  pdl_100?: boolean,
  pdl_120?: boolean,
  pdl_140?: boolean,
  pdl_160?: boolean,
  pdl_180?: boolean,
  pdl_200?: boolean,
  pdl_300?: boolean,
  pdl_400?: boolean,

    mg_2?: boolean,
  mg_4?: boolean,
  mg_6?: boolean,
  mg_8?: boolean,
  mg_10?: boolean,
  mg_12?: boolean,
  mg_14?: boolean,
  mg_16?: boolean,
  mg_18?: boolean,
  mg_20?: boolean,
  mg_22?: boolean,
  mg_24?: boolean,
  mg_26?: boolean,
  mg_28?: boolean,
  mg_30?: boolean,
  mg_32?: boolean,
  mg_34?: boolean,
  mg_36?: boolean,
  mg_38?: boolean,
  mg_40?: boolean,
  mg_50?: boolean,
  mg_60?: boolean,
  mg_70?: boolean,
  mg_80?: boolean,
  mg_90?: boolean,
  mg_100?: boolean,
  mg_120?: boolean,
  mg_140?: boolean,
  mg_160?: boolean,
  mg_180?: boolean,
  mg_200?: boolean,
  mg_300?: boolean,
  mg_400?: boolean,

  mgt_2?: boolean,
  mgt_4?: boolean,
  mgt_6?: boolean,
  mgt_8?: boolean,
  mgt_10?: boolean,
  mgt_12?: boolean,
  mgt_14?: boolean,
  mgt_16?: boolean,
  mgt_18?: boolean,
  mgt_20?: boolean,
  mgt_22?: boolean,
  mgt_24?: boolean,
  mgt_26?: boolean,
  mgt_28?: boolean,
  mgt_30?: boolean,
  mgt_32?: boolean,
  mgt_34?: boolean,
  mgt_36?: boolean,
  mgt_38?: boolean,
  mgt_40?: boolean,
  mgt_50?: boolean,
  mgt_60?: boolean,
  mgt_70?: boolean,
  mgt_80?: boolean,
  mgt_90?: boolean,
  mgt_100?: boolean,
  mgt_120?: boolean,
  mgt_140?: boolean,
  mgt_160?: boolean,
  mgt_180?: boolean,
  mgt_200?: boolean,
  mgt_300?: boolean,
  mgt_400?: boolean,

  mgr_2?: boolean,
  mgr_4?: boolean,
  mgr_6?: boolean,
  mgr_8?: boolean,
  mgr_10?: boolean,
  mgr_12?: boolean,
  mgr_14?: boolean,
  mgr_16?: boolean,
  mgr_18?: boolean,
  mgr_20?: boolean,
  mgr_22?: boolean,
  mgr_24?: boolean,
  mgr_26?: boolean,
  mgr_28?: boolean,
  mgr_30?: boolean,
  mgr_32?: boolean,
  mgr_34?: boolean,
  mgr_36?: boolean,
  mgr_38?: boolean,
  mgr_40?: boolean,
  mgr_50?: boolean,
  mgr_60?: boolean,
  mgr_70?: boolean,
  mgr_80?: boolean,
  mgr_90?: boolean,
  mgr_100?: boolean,
  mgr_120?: boolean,
  mgr_140?: boolean,
  mgr_160?: boolean,
  mgr_180?: boolean,
  mgr_200?: boolean,
  mgr_300?: boolean,
  mgr_400?: boolean,

  mgb_2?: boolean,
  mgb_4?: boolean,
  mgb_6?: boolean,
  mgb_8?: boolean,
  mgb_10?: boolean,
  mgb_12?: boolean,
  mgb_14?: boolean,
  mgb_16?: boolean,
  mgb_18?: boolean,
  mgb_20?: boolean,
  mgb_22?: boolean,
  mgb_24?: boolean,
  mgb_26?: boolean,
  mgb_28?: boolean,
  mgb_30?: boolean,
  mgb_32?: boolean,
  mgb_34?: boolean,
  mgb_36?: boolean,
  mgb_38?: boolean,
  mgb_40?: boolean,
  mgb_50?: boolean,
  mgb_60?: boolean,
  mgb_70?: boolean,
  mgb_80?: boolean,
  mgb_90?: boolean,
  mgb_100?: boolean,
  mgb_120?: boolean,
  mgb_140?: boolean,
  mgb_160?: boolean,
  mgb_180?: boolean,
  mgb_200?: boolean,
  mgb_300?: boolean,
  mgb_400?: boolean,

  mgl_2?: boolean,
  mgl_4?: boolean,
  mgl_6?: boolean,
  mgl_8?: boolean,
  mgl_10?: boolean,
  mgl_12?: boolean,
  mgl_14?: boolean,
  mgl_16?: boolean,
  mgl_18?: boolean,
  mgl_20?: boolean,
  mgl_22?: boolean,
  mgl_24?: boolean,
  mgl_26?: boolean,
  mgl_28?: boolean,
  mgl_30?: boolean,
  mgl_32?: boolean,
  mgl_34?: boolean,
  mgl_36?: boolean,
  mgl_38?: boolean,
  mgl_40?: boolean,
  mgl_50?: boolean,
  mgl_60?: boolean,
  mgl_70?: boolean,
  mgl_80?: boolean,
  mgl_90?: boolean,
  mgl_100?: boolean,
  mgl_120?: boolean,
  mgl_140?: boolean,
  mgl_160?: boolean,
  mgl_180?: boolean,
  mgl_200?: boolean,
  mgl_300?: boolean,
  mgl_400?: boolean,
}