import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { newpatient } from './types';

export const registerNewPatient = function* registerNewPatient(patient: newpatient) {
    yield takeEvery('SAVE_PATIENT', (action) => {

    })
}
