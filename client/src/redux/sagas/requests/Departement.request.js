import axios from 'axios';

const URL = 'http://localhost:5000/api/departement';

export function requestGetDepartements() {
  return axios.request({
    method: 'get',
    url: `${URL}/`,
  });
}
export function requestAddDepartements(action) {
  return axios.request({
    method: 'post',
    url: `${URL}/add`,
    data: {
      ...action.payload,
    },
  });
}
export function requestDeleteDepartements(action) {
  return axios.request({
    method: 'delete',
    url: `${URL}/${action.payload}`,
  });
}
export function requestUpdateDepartements(action) {
  console.log(action);
  return axios.request({
    method: 'put',
    url: `${URL}/${action.payload._id}`,
    data: {
      ...action.payload.values,
    },
  });
}
