import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [
      {
        name: "boryani",
      },
      {
        name: "boryani",
      },
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItem: (state) => {
      state.value.pop();
    },
    clearCart: (state) => {
      state = [];
    },
  },
});

export const { addItem, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
