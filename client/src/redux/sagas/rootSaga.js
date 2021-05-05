import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout, getRegister } from '../slices/authSlice';
import { handelGetLogin, handelIfLoged, handelGetLogout ,handelGetRegister } from './handlers/auth.handler';


export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  yield takeLatest(getRegister.type, handelGetRegister);
}
