import { takeLatest } from 'redux-saga/effects'
import { getLogin, ifLoged, getLogout, getRegister } from '../slices/authSlice'
import {
	handelGetLogin,
	handelIfLoged,
	handelGetLogout,
	handelGetRegister,
} from './handlers/auth.handler'
import {
	allDepartements,
	deleteDepartement,
	addDepartement,
	updateDepartement,
} from '../slices/Departement.slice'
import {
	handelGetDepartement,
	handelDeleteDepartement,
	handelAddDepartement,
	handelUpdateDepartement,
} from './handlers/Departement.handler'
import {
	allTickets,
	deleteTicket,
	allTechnicient,
	updateTicket,
} from '../slices/Ticket.slice'
import {
	handelDeleteTicket,
	handelGetTicket,
	handelGetTechnicien,
	handelUpdateTicket,
} from './handlers/Ticket.handler'
export function* watcherSaga() {
	yield takeLatest(ifLoged.type, handelIfLoged)
	yield takeLatest(getLogin.type, handelGetLogin)
	yield takeLatest(getLogout.type, handelGetLogout)
	yield takeLatest(getRegister.type, handelGetRegister)
	yield takeLatest(allDepartements.type, handelGetDepartement)
	yield takeLatest(deleteDepartement.type, handelDeleteDepartement)
	yield takeLatest(addDepartement.type, handelAddDepartement)
	yield takeLatest(updateDepartement.type, handelUpdateDepartement)
	yield takeLatest(allTickets.type, handelGetTicket)
	yield takeLatest(deleteTicket.type, handelDeleteTicket)
	yield takeLatest(updateTicket.type, handelUpdateTicket)
	yield takeLatest(allTechnicient.type, handelGetTechnicien)
}
