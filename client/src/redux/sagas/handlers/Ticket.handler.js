import { call, put } from 'redux-saga/effects';
import {
  requestGetTickets,
  requestAddTickets,
  requestDeleteTickets,
  requestUpdateTickets,
} from '../requests/Ticket.request';
import { getTicket, allTickets } from '../../slices/Ticket.slice';

export function* handelGetTicket(action) {
  try {
    const response = yield call(requestGetTickets);
    const { data } = response;
    yield put(getTicket(data));
  } catch (error) {
    console.log(error);
  }
}
export function* handelAddTicket(action) {
  try {
    yield call(requestAddTickets, action);
    yield put(allTickets());
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
  try {
    yield call(requestUpdateTickets, action);
    yield put(allTickets());
  } catch (error) {
    console.log(error);
  }
}
