import { Reducer } from "redux";
import { ActionType, getType } from "typesafe-actions";
import { submission } from "./types";
import * as types from "./types";
import * as actions from "./actions";

export type submissionAction = ActionType<typeof actions>;

export const initialSubmission: submission = {
    isSubmitting: false,
}

export const reducer: Reducer<submission[], submissionAction> = (state: submission[] = [initialSubmission], action: submissionAction) => {
    switch (action.type) {
        case getType(actions.submit):
            return [...state, action.payload]
        default:
            return state
    }
}
