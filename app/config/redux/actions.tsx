import { createAction } from "typesafe-actions";
import { newpatient } from "./types";

export const savePatient = createAction('SAVE_PATIENT', resolve => {
    return (demographics: newpatient) => resolve(demographics)
})
