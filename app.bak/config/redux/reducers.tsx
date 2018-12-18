import { Reducer } from "redux";
import { entryFormActions, saveDemographics } from "./actions";
import { demographics } from "./datadesign";

export const initialState: demographics = {
    nic: "",
    name: "",
    age: 0,
    gender: "",
    consent: "",
}

export const reducer: Reducer<demographics> = (state = initialState, action ) => {
    switch (action.type) {
        case entryFormActions.SAVE_DEMOGRAPHICS:
            return {
                ...state,
                data: action.payload,
            }
        default:
            return state;
    }
}
