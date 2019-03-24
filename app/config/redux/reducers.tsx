import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { newpatient } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type patientAction = ActionType<typeof actions>;

export const initialPatient: newpatient = {
      nic: ""
    , name: ""
    , age: ""
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
    , antihavigm: "unavailable"
    , antihavigmDate: ""
    , antihevigm: "unavailable"
    , antihevigmDate: ""
    , hbsag: "unavailable"
    , hbsagDate: ""
    , antihcvigm: "unavailable"
    , antihcvigmDate: ""
}

export const reducer: Reducer<newpatient[], patientAction> = (state: newpatient[] = [initialPatient], action: patientAction) => {
    switch (action.type) {
        case getType(actions.saveNIC):
            return [...state, {
            ...state.slice(-1)[0],
            nic: action.payload,
            }]
        case getType(actions.saveName):
            return [...state, {
            ...state.slice(-1)[0],
            name: action.payload,
            }]
        case getType(actions.saveAge):
            return [...state, {
            ...state.slice(-1)[0],
            age: action.payload,
            }]
        case getType(actions.saveGender):
            return [...state, {
            ...state.slice(-1)[0],
            gender: action.payload,
            }]
        case getType(actions.saveConsent):
            return [...state, {
            ...state.slice(-1)[0],
            consent: action.payload
            }]
        case getType(actions.saveDrug):
            return [...state, {
            ...state.slice(-1)[0],
            drug: action.payload,
            }]
        case getType(actions.saveDose):
            return [...state, {
            ...state.slice(-1)[0],
            dose: action.payload,
            }]
        case getType(actions.saveUnit):
            return [...state, {
            ...state.slice(-1)[0],
            unit: action.payload,
            }]
        case getType(actions.saveIndication):
            return [...state, {
            ...state.slice(-1)[0],
            indication: action.payload,
            }]
        case getType(actions.saveRechallenged):
            return [...state, {
            ...state.slice(-1)[0],
            rechallenged: action.payload,
            }]
        case getType(actions.saveChallengeResult):
            return [...state, {
            ...state.slice(-1)[0],
            challengeResult: action.payload
            }]
        case getType(actions.saveJaundice):
            return [...state, {
            ...state.slice(-1)[0],
            jaundice: action.payload,
            }]
        case getType(actions.savePain):
            return [...state, {
            ...state.slice(-1)[0],
            pain: action.payload,
            }]
        case getType(actions.savePruritis):
            return [...state, {
            ...state.slice(-1)[0],
            pruritis: action.payload
            }]
        case getType(actions.saveBilirubin):
            return [...state, {
            ...state.slice(-1)[0],
            bilirubin: action.payload
            }]
        case getType(actions.saveBilirubinDate):
            return [...state, {
            ...state.slice(-1)[0],
            bilirubinDate: action.payload
            }]
        case getType(actions.saveALT):
            return [...state, {
            ...state.slice(-1)[0],
            alt: action.payload
            }]
        case getType(actions.saveALTDate):
            return [...state, {
            ...state.slice(-1)[0],
            altDate: action.payload
            }]
        case getType(actions.saveAlkPhos):
            return [...state, {
            ...state.slice(-1)[0],
            alkphos: action.payload
            }]
        case getType(actions.saveAlkPhosDate):
            return [...state, {
            ...state.slice(-1)[0],
            alkphosDate: action.payload
            }]
        case getType(actions.savePT):
            return [...state, {
            ...state.slice(-1)[0],
            pt: action.payload
            }]
        case getType(actions.savePTDate):
            return [...state, {
            ...state.slice(-1)[0],
            ptDate: action.payload
            }]
        case getType(actions.saveAntiHAVIgM):
            return [...state, {
            ...state.slice(-1)[0],
            antihavigm: action.payload
            }]
        case getType(actions.saveAntiHAVIgMDate):
            return [...state, {
            ...state.slice(-1)[0],
            antihavigmDate: action.payload
            }]
        case getType(actions.saveAntiHEVIgM):
            return [...state, {
            ...state.slice(-1)[0],
            antihevigm: action.payload
            }]
        case getType(actions.saveAntiHEVIgMDate):
            return [...state, {
            ...state.slice(-1)[0],
            antihevigmDate: action.payload
            }]
        case getType(actions.saveHBsAg):
            return [...state, {
            ...state.slice(-1)[0],
            hbsag: action.payload
            }]
        case getType(actions.saveHBsAgDate):
            return [...state, {
            ...state.slice(-1)[0],
            hbsagDate: action.payload
            }]
        case getType(actions.saveAntiHCVIgM):
            return [...state, {
            ...state.slice(-1)[0],
            antihcvigm: action.payload
            }]
        case getType(actions.saveAntiHCVIgMDate):
            return [...state, {
            ...state.slice(-1)[0],
            antihcvigmDate: action.payload
            }]
        case getType(actions.saveNewPatient):
            return state
        case getType(actions.resetPatient):
            return [...state, initialPatient]
        default:
            return state
    }
}
