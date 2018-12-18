import { demographics } from "./datadesign";
import { action } from "typesafe-actions";
import { ActionCreatorsMapObject } from "redux";

// utility functions
// interface Action<T extends string> {
//     type: T;
// }
// 
// interface ActionWtihPayload<T extends string, P> extends Action<T> {
//     payload: P;
// }
// 
// export const enum ActionTypes { 
//     SAVE_DEMOGRAPHICS= "SAVE_DEMOGRAPHICS",
// }
// 
// function createAction<T extends ActionTypes>(type: T): Action<T>
// function createAction<T extends ActionTypes, P>(type: T, payload: P): ActionWtihPayload<T, P>
// function createAction<T extends ActionTypes, P>(type: T, payload?: P) {
//     return payload === undefined ? { type } : { type, payload };
// }
// 
// type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<A[keyof A]>;

// Actions
// export const actions = {
//     saveDemographics: (demographics: demographics) => createAction(
//         ActionTypes.SAVE_DEMOGRAPHICS, demographics),
// }
// 
// export type Actions = ActionsUnion<typeof actions>;

export enum entryFormActions {
    SAVE_DEMOGRAPHICS = "@@entry/SAVE_DEMOGRAPHICS",

}
export const saveDemographics = (data: demographics) => action(entryFormActions.SAVE_DEMOGRAPHICS, data)
