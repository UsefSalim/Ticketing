import { createSlice } from '@reduxjs/toolkit';

const TicketsSlice = createSlice({
  name: 'Ticket',
  initialState: {
    Ticket: '',
    Techniciens: ''
  },
  reducers: {
    getTicket: (state = this.initialState, action) => {
      const Ticket = action.payload;
      return {
        ...state,
        Ticket
      };
    },
    allTickets: () => {},
    addTicket: () => {},
    deleteTicket: () => {},
    updateTicket: () => {},
    allTechnicient: () => {},
    getTechnicient: (state = this.initialState, action) => {
      const Techniciens = action.payload;
      return {
        ...state,
        Techniciens
      };
    }
  }
});
export const {
  getTicket,
  addTicket,
  allTickets,
  deleteTicket,
  updateTicket,
  allTechnicient,
  getTechnicient
} = TicketsSlice.actions;

export default TicketsSlice.reducer;
