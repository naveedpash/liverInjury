import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { newpatient } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type patientAction = ActionType<typeof actions>;

export const initialPatient: newpatient = {
      nic: ""
    , name: ""
    , age: 0
    , gender: "male"
    , consent: "yes"
    , drug: ""
    , dose: ""
    , unit: "mg"
    , indication: ""
    , rechallenged: "no"
    , challengeResult: ""
    , jaundice: "no"
    , pain: "no"
    , pruritis: "no"
    , bilirubin: ""
    , bilirubinDate: ""
    , pt: ""
    , ptDate: ""
    , alt: ""
    , altDate: ""
    , alkphos: ""
    , alkphosDate: ""
    , antihavigm: ""
    , antihavigmDate: ""
    , antihevigm: ""
    , antihevigmDate: ""
    , hbsag: ""
    , hbsagDate: ""
    , antihcvigm: ""
    , antihcvigmDate: ""
}

export const reducer: Reducer<newpatient[], patientAction> = (state: newpatient[] = [initialPatient], action: patientAction) => {
    switch (action.type) {
        case getType(actions.saveDemographics):
            return [...state, {
            ...state.slice(-1)[0],
            nic: action.payload.nic,
            name: action.payload.name,
            age: action.payload.age,
            gender: action.payload.gender,
            consent: action.payload.consent
            }]
        case getType(actions.saveDili):
            return [...state, {
            ...state.slice(-1)[0],
            drug: action.payload.drug,
            dose: action.payload.dose,
            unit: action.payload.unit,
            rechallenged: action.payload.rechallenged,
            challengeResult: action.payload.challengeResult
            }]
        case getType(actions.saveHistory):
            return [...state, {
            ...state.slice(-1)[0],
            jaundice: action.payload.jaundice,
            pain: action.payload.pain,
            pruritis: action.payload.pruritis
            }]
        case getType(actions.saveLabs):
            return [...state, {
            ...state.slice(-1)[0]
            , bilirubin: action.payload.bilirubin
            , bilirubinDate: action.payload.bilirubinDate
            , alt: action.payload.alt
            , altDate: action.payload.altDate
            , alkphos: action.payload.alkphos
            , alkphosDate: action.payload.alkphosDate
            , pt: action.payload.pt
            , ptDate: action.payload.ptDate
            , antihavigm: action.payload.antihavigm
            , antihavigmDate: action.payload.antihavigmDate
            , antihevigm: action.payload.antihevigm
            , antihevigmDate: action.payload.antihevigmDate
            , hbsag: action.payload.hbsag
            , hbsagDate: action.payload.hbsagDate
            , antihcvigm: action.payload.antihcvigm
            , antihcvigmDate: action.payload.antihcvigmDate
            }]
        default:
            return state
    }
}
