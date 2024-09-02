import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "./slices/hotel";

const store = configureStore({
  reducer: { hotelSlice },
});

export default store;
