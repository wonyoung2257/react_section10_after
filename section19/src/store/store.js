import { configureStore, createSlice } from "@reduxjs/toolkit";
const initIsCartButton = {
  isCartToggle: false,
};
const cartButtonSlice = createSlice({
  name: "cartButton",
  initialState: initIsCartButton,
  reducers: {
    toggleCart(state) {
      state.isCartToggle = !state.isCartToggle;
    },
  },
});

const initCart = {
  item: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initCart,
  reducers: {
    addItem(state, action) {
      for (const key in state.item) {
        if (state.item[key].title === action.payload.title) {
          state.item[key].quantity++;
          state.item[key].total = state.item[key].total + state.item[key].price;
          return;
        }
      }
      state.item.push(action.payload);
    },
    removeItem(state, action) {
      for (const key in state.item) {
        if (state.item[key].title === action.payload.title) {
          if (state.item[key].quantity > 1) {
            state.item[key].quantity--;
            state.item[key].total =
              state.item[key].total - state.item[key].price;
          } else {
            state.item.splice(key, 1);
          }

          return;
        }
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cartButton: cartButtonSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const cartButtonActions = cartButtonSlice.actions;

export const cartActions = cartSlice.actions;

export default store;
