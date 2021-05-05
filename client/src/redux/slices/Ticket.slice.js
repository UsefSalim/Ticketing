import { createSlice } from '@reduxjs/toolkit';

const TicketsSlice = createSlice({
  name: 'Ticket',
  initialState: {},
  reducers: {
    getTicket: (state = this.initialState, action) => {
      const Ticket = action.payload;
      return {
        ...state,
        Ticket,
      };
    },
    allTickets: () => {},
    addTicket: () => {},
    deleteTicket: () => {},
    updateTicket: () => {},
  },
});
export const {
  getTicket,
  addTicket,
  allTickets,
  deleteTicket,
  updateTicket,
} = TicketsSlice.actions;

export default TicketsSlice.reducer;
