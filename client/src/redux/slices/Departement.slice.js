import { createSlice } from '@reduxjs/toolkit';

const DepartementsSlice = createSlice({
  name: 'Departement',
  initialState: {
    Departement:'',
    Erors :'',
  },
  reducers: {
    getDepartement: (state = this.initialState, action) => {
      const Departement = action.payload;
      return {
        ...state,
        Departement,
        Errors:""
      };
    },
    allDepartements: () => {},
    addDepartement: () => {},
    deleteDepartement: () => {},
    updateDepartement: () => {},
    errors :(state = this.initialState, action) => {
      return {
        ...state,
        Errors: action.payload
      };
    }
  },
});
export const {
  getDepartement,
  addDepartement,
  allDepartements,
  deleteDepartement,
  updateDepartement,
  errors
} = DepartementsSlice.actions;

export default DepartementsSlice.reducer;
