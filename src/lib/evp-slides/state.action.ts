import { State } from "./state.store";

export type ActionType =
  | "READ_EFFECT"
  | "SET_CURRENT"
  | "CURRENT_PLUS"
  | "CURRENT_MINUS"
  | "CURRENT_TO_FIRST"
  | "CURRENT_TO_LAST";

export type Action = {
  type: ActionType;
  payload?: any;
};

export interface ActionHandler {
  (state: State, action: { type: "SET_CURRENT" | "CURRENT_TO_FIRST" | "CURRENT_TO_LAST"; payload?: number }): State;
  (state: State, action: { type: "CURRENT_PLUS"; payload: { max?: number; limit?: number } }): State;
  (state: State, action: { type: "CURRENT_MINUS"; payload: { max?: number; limit?: number } }): State;
  (state: State, action: { type: "READ_EFFECT"; payload: Function }): State;
}

const actions: { type: ActionType; handler: ActionHandler }[] = [
  {
    type: "READ_EFFECT",
    // @ts-ignore
    handler(state: State, action: { type: "READ_EFFECT"; payload?: Function }): State {
      action.payload?.(state);
      return state;
    },
  },
  {
    type: "SET_CURRENT",
    // @ts-ignore
    handler(state: State, action: { type: "SET_CURRENT"; payload?: number }): State {
      return {
        ...state,
        current: action.payload ?? state.current,
      };
    },
  },
  {
    type: "CURRENT_PLUS",
    // @ts-ignore
    handler: (state: State, action: { type: "CURRENT_PLUS"; payload: { max?: number; limit?: number } }) => {
      const newCur = state.current + 1;
      const max = action.payload?.limit ?? action.payload.max;
      if (max && newCur > max) {
        return state;
      }
      return {
        ...state,
        current: newCur,
      };
    },
  },
  {
    type: "CURRENT_MINUS",
    // @ts-ignore
    handler: (state: State, action: { type: "CURRENT_MINUS"; payload: { limit?: number } }) => {
      const newCur = state.current - 1;
      const min = action.payload?.limit ?? 0;
      if (newCur < min) {
        return state;
      }
      return {
        ...state,
        current: newCur,
      };
    },
  },
  {
    type: "CURRENT_TO_FIRST",
    // @ts-ignore
    handler: (state: State, action: { type: "CURRENT_TO_FIRST"; payload?: number }) => {
      return {
        ...state,
        current: 0,
      };
    },
  },
  {
    type: "CURRENT_TO_LAST",
    // @ts-ignore
    handler: (state: State, action: { type: "CURRENT_TO_LAST" | ActionType; payload: number }) => {
      return {
        ...state,
        current: action.payload,
      };
    },
  },
];

export default actions;
