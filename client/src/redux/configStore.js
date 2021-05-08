import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './sagas/rootSaga';
import authSlice from './slices/authSlice';
import departementSlice from './slices/Departement.slice';
import ticketSlices from './slices/Ticket.slice';
// create a saga middleware
const sagaMiddleware = createSagaMiddleware();
// create a array of middlewares saga
const middleware = [sagaMiddleware];

const reducer = combineReducers({
  authentification: authSlice,
  departement: departementSlice,
  tickets: ticketSlices
});

export default configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), ...middleware]
});
sagaMiddleware.run(watcherSaga);
