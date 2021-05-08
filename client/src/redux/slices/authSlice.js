import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authslice',
  initialState: {
    role: '',
    isAuthenticated: false,
    loginError: '',
    registerError: ''
  },
  reducers: {
    ifLoged: () => {},
    getLogin: () => {},
    getRegister: () => {},
    setLogin: (state = this.initialState, action) => ({
      ...state,
      role: action.payload.role,
      isAuthenticated: action.payload.isAuthenticated,
      loginError: '',
      registerError: ''
    }),
    getLogout: () => {},
    loginError: (state = this.initialState, action) => ({
      ...state,
      loginError: action.payload
    }),
    registerError: (state = this.initialState, action) => ({
      ...state,
      registerError: action.payload
    })
  }
});

export const {
  setLogin,
  getRegister,
  getLogin,
  ifLoged,
  loginError,
  getLogout,
  registerError
} = authSlice.actions;
export default authSlice.reducer;
