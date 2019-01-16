import { combineReducers, Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { demographics, dili, history, labs } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type demographicsAction = ActionType<typeof actions.saveDemographics>;
export type diliAction = ActionType<typeof actions.saveDili>;
export type historyAction = ActionType<typeof actions.saveHistory>;
export type labsAction = ActionType<typeof actions.saveLabs>;

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

export const initialHistory: history = {
    jaundice: "no",
    pain: "no",
    pruritis: "no",
}

export const historyReducer: Reducer<history[], historyAction> = (state: history[] = [initialHistory], action: historyAction) => {
    switch (action.type) {
        case getType(actions.saveHistory):
            return [...state, action.payload]
        default:
            return state
    }
}
export const initialLabs: labs = {
    bilirubin: "",
    pt: "",
    alt: "",
    alkphos: "",
    antihavigm: "",
    antihevigm: "",
    hbsag: "",
    antihcvigm: "",
}

export const labsReducer: Reducer<labs[], labsAction> = (state: labs[] = [initialLabs], action: labsAction) => {
    switch (action.type) {
        case getType(actions.saveLabs):
            return [...state, action.payload]
        default:
            return state
    }
}

export const reducer = combineReducers({
    demographics: demographicsReducer,
    dili: diliReducer,
    history: historyReducer,
});
