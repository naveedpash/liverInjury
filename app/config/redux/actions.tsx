import { createAction } from "typesafe-actions";
import { newpatient } from "./types";

export const saveNIC = createAction('SAVE_NIC', resolve => {
    return (nic: newpatient["nic"]) => resolve(nic)
})

export const saveName = createAction('SAVE_NAME', resolve => {
    return (name: newpatient["name"]) => resolve(name)
})

export const saveAge = createAction('SAVE_AGE', resolve => {
    return (age: newpatient["age"]) => resolve(age)
})

export const saveGender = createAction('SAVE_GENDER', resolve => {
    return (gender: newpatient["gender"]) => resolve(gender)
})

export const saveConsent = createAction('SAVE_CONSENT', resolve => {
    return (consent: newpatient["consent"]) => resolve(consent)
})

export const saveDrug = createAction('SAVE_DRUG', resolve => {
    return (drug: newpatient["drug"]) => resolve(drug)
})

export const saveDose = createAction('SAVE_DOSE', resolve => {
    return (dose: newpatient["dose"]) => resolve(dose)
})

export const saveUnit = createAction('SAVE_UNIT', resolve => {
    return (unit: newpatient["unit"]) => resolve(unit)
})

export const saveIndication = createAction('SAVE_INDICATION', resolve => {
    return (indication: newpatient["indication"]) => resolve(indication)
})

export const saveRechallenged = createAction('SAVE_RECHALLENGED', resolve => {
    return (rechallenged: newpatient["rechallenged"]) => resolve(rechallenged)
})

export const saveChallengeResult = createAction('SAVE_CHALLENGERESULT', resolve => {
    return (challengeResult: newpatient["challengeResult"]) => resolve(challengeResult)
})

export const saveJaundice = createAction('SAVE_JAUNDICE', resolve => {
    return (jaundice: newpatient["jaundice"]) => resolve(jaundice)
})

export const savePain = createAction('SAVE_PAIN', resolve => {
    return (pain: newpatient["pain"]) => resolve(pain)
})

export const savePruritis = createAction('SAVE_PRURITIS', resolve => {
    return (pruritis: newpatient["pruritis"]) => resolve(pruritis)
})

export const saveBilirubin = createAction('SAVE_BILIRUBIN', resolve => {
    return (bilirubin: newpatient["bilirubin"]) => resolve(bilirubin)
})

export const saveBilirubinDate = createAction('SAVE_BILIRUBINDATE', resolve => {
    return (bilirubinDate: newpatient["bilirubinDate"]) => resolve(bilirubinDate)
})

export const savePT = createAction('SAVE_PT', resolve => {
    return (pt: newpatient["pt"]) => resolve(pt)
})

export const savePTDate = createAction('SAVE_PTDATE', resolve => {
    return (ptDate: newpatient["ptDate"]) => resolve(ptDate)
})

export const saveALT = createAction('SAVE_ALT', resolve => {
    return (alt: newpatient["alt"]) => resolve(alt)
})

export const saveALTDate = createAction('SAVE_ALTDATE', resolve => {
    return (altDate: newpatient["altDate"]) => resolve(altDate)
})

export const saveAlkPhos = createAction('SAVE_ALKPHOS', resolve => {
    return (alkphos: newpatient["alkphos"]) => resolve(alkphos)
})

export const saveAlkPhosDate = createAction('SAVE_ALKPHOSDATE', resolve => {
    return (alkphosDate: newpatient["alkphosDate"]) => resolve(alkphosDate)
})

export const saveAntiHAVIgM = createAction('SAVE_ANTIHAVIGM', resolve => {
    return (antihavigm: newpatient["antihavigm"]) => resolve(antihavigm)
})

export const saveAntiHAVIgMDate = createAction('SAVE_ANTIHAVIGMDATE', resolve => {
    return (antihavigmDate: newpatient["antihavigmDate"]) => resolve(antihavigmDate)
})

export const saveAntiHEVIgM = createAction('SAVE_ANTIHEVIGM', resolve => {
    return (antihevigm: newpatient["antihevigm"]) => resolve(antihevigm)
})

export const saveAntiHEVIgMDate = createAction('SAVE_ANTIHEVIGMDATE', resolve => {
    return (antihevigmDate: newpatient["antihevigmDate"]) => resolve(antihevigmDate)
})

export const saveHBsAg = createAction('SAVE_HBSAG', resolve => {
    return (hbsag: newpatient["hbsag"]) => resolve(hbsag)
})

export const saveHBsAgDate = createAction('SAVE_HBSAGDATE', resolve => {
    return (hbsagDate: newpatient["hbsagDate"]) => resolve(hbsagDate)
})

export const saveAntiHCVIgM = createAction('SAVE_ANTIHCVIGM', resolve => {
    return (antihcvigm: newpatient["antihcvigm"]) => resolve(antihcvigm)
})

export const saveAntiHCVIgMDate = createAction('SAVE_ANTIHCVIGMDATE', resolve => {
    return (antihcvigmDate: newpatient["antihcvigmDate"]) => resolve(antihcvigmDate)
})

export const saveNewPatient = createAction('SAVE_NEWPATIENT')

export const resetPatient = createAction('RESET_PATIENT', resolve => {
    return (blankPatient: newpatient) => resolve(blankPatient)
})
