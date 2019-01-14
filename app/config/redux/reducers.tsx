import { combineReducers, Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { demographics, dili, newpatient } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type demographicsAction = ActionType<typeof actions.saveDemographics>;
export type diliAction = ActionType<typeof actions.saveDili>;

export const initialDemographics: demographics = {
    nic: "",
    name: "",
    age: 0,
    gender: "male",
    consent: "yes"
}

export const demographicsReducer: Reducer<demographics[], demographicsAction> = (state: demographics[] = [initialDemographics], action: demographicsAction) => {
    switch (action.type) {
        case getType(actions.saveDemographics):
            return [...state, action.payload]
        default:
            return state
    }
}

export const initialDili: dili = {
    drug: "",
    dose: "",
    unit: "milligrams",
    indication: "",
    rechallenged: "no",
    challengeResult: ""
}

export const diliReducer: Reducer<dili[], diliAction> = (state: dili[] = [initialDili], action: diliAction) => {
    switch (action.type) {
        case getType(actions.saveDili):
            return [...state, action.payload]
        default:
            return state
    }
}

export const reducer = combineReducers({
    demographics: demographicsReducer,
    dili: diliReducer
});
