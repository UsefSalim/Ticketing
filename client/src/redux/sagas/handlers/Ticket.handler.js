import { call, put } from "redux-saga/effects";
import {
  requestGetTickets,
  requestAddTickets,
  requestDeleteTickets,
  requestUpdateTickets,
  requestGetTechnicien,
  requestGetOneTickets,
} from "../requests/Ticket.request";
import {
  getTicket,
  allTickets,
  getTechnicient,
  getMessage,
  oneTicket
} from "../../slices/Ticket.slice";

export function* handelGetTicket(action) {
  try {
    const response = yield call(requestGetTickets, action);
    const { data } = response;
    yield put(getTicket(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handelGetTechnicien(action) {
  try {
    const response = yield call(requestGetTechnicien);
    const { data } = response;
    yield put(getTechnicient(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handelAddTicket(action) {
  try {
    yield call(requestAddTickets, action);
    yield put(getMessage("Ticket Ajouter Avec succées"));
  } catch (error) {
    console.log(error);
  }
}
export function* handelDeleteTicket(action) {
  try {
    yield call(requestDeleteTickets, action);
    yield put(allTickets());
  } catch (error) {
    console.log(error);
  }
}
export function* handelUpdateTicket(action) {
  console.log(action);
  try {
    yield call(requestUpdateTickets, action);
    yield put(allTickets());
  } catch (error) {
    console.log(error);
  }
}
export function* handelGetOneTicket(action) {
  // console.log(action);
  try {
    const {data } = yield call(requestGetOneTickets, action);
    if(data)  yield put(oneTicket(data)); 
  } catch (error) {
    console.log(error);
  }
}
