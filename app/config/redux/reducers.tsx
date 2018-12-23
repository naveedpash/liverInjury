import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { demographics } from "./types";
import * as actions from "./actions";

export type Actions = ActionType<typeof actions>;

export const initialState: demographics = {
    nic: "",
    name: "",
    age: 0,
    gender: "male",
    consent: "yes",
}

export const reducer: Reducer<demographics[], Actions> = (state: demographics[] = [initialState], action: Actions) => {
    switch (action.type) {
        case getType(actions.saveDemographics):
            return [...state, action.payload]
    }
}
