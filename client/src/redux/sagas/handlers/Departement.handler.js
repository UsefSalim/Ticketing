import { call, put } from "redux-saga/effects";
import {
  requestGetDepartements,
  requestAddDepartements,
  requestDeleteDepartements,
  requestUpdateDepartements,
} from "../requests/Departement.request";
import {
  getDepartement,
  allDepartements,
  errors,
} from "../../slices/Departement.slice";

export function* handelGetDepartement(action) {
  try {
    const response = yield call(requestGetDepartements);
    const { data } = response;
    yield put(getDepartement(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handelAddDepartement(action) {
  try {
    yield call(requestAddDepartements, action);
    yield put(allDepartements());
  } catch (error) {
    if (error) yield put(errors(error.response.data));
  }
}
export function* handelDeleteDepartement(action) {
  try {
    yield call(requestDeleteDepartements, action);
    yield put(allDepartements());
  } catch (error) {
    console.log(error);
  }
}
export function* handelUpdateDepartement(action) {
  try {
    yield call(requestUpdateDepartements, action);
    yield put(allDepartements());
  } catch (error) {
    if (error) yield put(errors(error.response.data));
  }
}
