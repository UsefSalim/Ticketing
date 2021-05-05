import axios from 'axios';

const URL = '';

export function requestGetTickets() {
  return axios.request({
    method: 'get',
    url: `${URL}/`,
  });
}
export function requestAddTickets(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/add`,
    data: {
      ...action.payload,
    },
  });
}
export function requestDeleteTickets(action) {
  return axios.request({
    method: 'delete',
    url: `${URL}/${action.payload}`,
  });
}
export function requestUpdateTickets(action) {
  console.log(action);
  return axios.request({
    method: 'put',
    url: `${URL}/${action.payload._id}`,
    data: {
      ...action.payload.data,
    },
  });
}
