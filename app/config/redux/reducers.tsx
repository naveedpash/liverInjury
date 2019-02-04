import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { newpatient } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type patientAction = ActionType<typeof actions.savePatient>;

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
        case getType(actions.savePatient):
            return [...state, action.payload]
        default:
            return state
    }
}
