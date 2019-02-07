import { createAction } from "typesafe-actions";
import { demographics, dili, history, labs, newpatient } from "./types";

export const saveDemographics = createAction('SAVE_DEMOGRAPHICS', resolve => {
    return (demographics: demographics) => resolve(demographics)
})

export const saveDili = createAction('SAVE_DILI', resolve => {
    return (dili: dili) => resolve(dili)
})

export const saveHistory = createAction('SAVE_HISTORY', resolve => {
    return (history: history) => resolve(history)
})

export const saveLabs = createAction('SAVE_LABS', resolve => {
    return (labs: labs) => resolve(labs)
})

export const savePatient = createAction('SAVE_PATIENT', resolve => {
    return (newpatient: newpatient) => resolve(newpatient)
})
