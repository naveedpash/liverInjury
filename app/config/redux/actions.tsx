import { createAction } from "typesafe-actions";
import { demographics } from "./types";

export const saveDemographics = createAction('SAVE_DEMOGRAPHICS', resolve => {
    return (demographics: demographics) => resolve(demographics)
})
