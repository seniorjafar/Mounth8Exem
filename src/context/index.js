import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import wishlistSlice from "./slices/WishliSlice";
import cartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});