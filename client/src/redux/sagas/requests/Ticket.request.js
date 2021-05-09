import axios from "axios";

const URL = "http://localhost:5000/api/ticket";

export function requestGetTickets() {
  return axios.request({
    method: "get",
    url: `${URL}/`,
  });
}
export function requestGetTechnicien() {
  return axios.request({
    method: "get",
    url: `${URL}/tech/alltech`,
  });
}
export function requestGetOneTickets(action) {
  return axios.request({
    method: "get",
    url: `${URL}/ticket/${action.payload}`,
  });
}
export function requestAddTickets(action) {
  return axios.request({
    method: "post",
    url: `${URL}/add`,
    data: {
      ...action.payload,
    },
  });
}
export function requestDeleteTickets(action) {
  return axios.request({
    method: "delete",
    url: `${URL}/${action.payload}`,
  });
}
export function requestUpdateTickets(action) {
  const {  etat } = action.payload;
  return axios.request({
    method: "put",
    url: `${URL}/${action.payload.id}`,
    data: {
      ...action.payload.values,
      etat,
    },
  });
}
