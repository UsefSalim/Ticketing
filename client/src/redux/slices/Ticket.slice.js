import { createSlice } from '@reduxjs/toolkit';

const TicketsSlice = createSlice({
  name: 'Ticket',
  initialState: {
    Ticket: '',
    Techniciens: '',
    addMessage:''
  },
  reducers: {
    getTicket: (state = this.initialState, action) => {
      const Ticket = action.payload;
      return {
        ...state,
        Ticket,
        addMessage:''
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
    },
    getMessage:(state = this.initialState, action) => {
      const addMessage = action.payload;
      return {
        ...state,
        addMessage
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
  getTechnicient,
  getMessage
} = TicketsSlice.actions;

export default TicketsSlice.reducer;
