import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const { id } = payload;

      let copyOfStateItems = [...state.cartItems];
      // find the index of the item
      const index = copyOfStateItems.findIndex((item) => item.id === id);

      // Don't understand what's happening right now.
      if (index === -1) {
        copyOfStateItems.push({
          ...payload,
          quantity: 1,
        });
      } else {
        copyOfStateItems[index] = {
          ...copyOfStateItems[index],
          quantity: copyOfStateItems[index].quantity + 1,
        };
      }

      state.cartItems = copyOfStateItems;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
