import { State } from "./state.store";
export type ActionType = "READ_EFFECT" | "SET_CURRENT" | "CURRENT_PLUS" | "CURRENT_MINUS" | "CURRENT_TO_FIRST" | "CURRENT_TO_LAST";
export type Action = {
    type: ActionType;
    payload?: any;
};
export interface ActionHandler {
    (state: State, action: {
        type: "SET_CURRENT" | "CURRENT_TO_FIRST" | "CURRENT_TO_LAST";
        payload?: number;
    }): State;
    (state: State, action: {
        type: "CURRENT_PLUS";
        payload: {
            max?: number;
            limit?: number;
        };
    }): State;
    (state: State, action: {
        type: "CURRENT_MINUS";
        payload: {
            max?: number;
            limit?: number;
        };
    }): State;
    (state: State, action: {
        type: "READ_EFFECT";
        payload: Function;
    }): State;
}
declare const actions: {
    type: ActionType;
    handler: ActionHandler;
}[];
export default actions;
