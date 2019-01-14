import { createAction } from "typesafe-actions";
import { demographics, dili } from "./types";

export const saveDemographics = createAction('SAVE_DEMOGRAPHICS', resolve => {
    return (demographics: demographics) => resolve(demographics)
})

export const saveDili = createAction('SAVE_DILI', resolve => {
    return (dili: dili) => resolve(dili)
})
