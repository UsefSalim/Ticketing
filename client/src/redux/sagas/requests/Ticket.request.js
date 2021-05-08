import axios from "axios";

const URL = "http://localhost:5000/api/ticket";

export function requestGetTickets(action) {
  return axios.request({
    method: "get",
    url: `${URL}/${action.payload}`,
  });
}
export function requestGetTechnicien() {
  return axios.request({
    method: "get",
    url: `${URL}/tech/alltech`,
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
  const { type, etat } = action.payload;
  return axios.request({
    method: "put",
    url: `${URL}/${action.payload.id}`,
    data: {
      ...action.payload.values,
      type,
      etat,
    },
  });
}
