import { createAction } from "typesafe-actions";
import { submission } from "./types";

export const submit = createAction('SUBMIT', resolve => {
    return (submission: submission) => resolve(submission)
})
