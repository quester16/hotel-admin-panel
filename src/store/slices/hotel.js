import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  roomStatus: [],
  rooms: [],
  loading: false,
  error: false,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    makeEntry: (state, action) => {
      state.roomStatus.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchRooms.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.rooms = [];
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.rooms = action.payload;
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.rooms = [];
      });
  },
});

export default hotelSlice.reducer;

export const { makeEntry } = hotelSlice.actions;

export const fetchRooms = createAsyncThunk("hotel/fetchRooms", async () => {
  const req = await axios.get("http://localhost:3000/rooms");
  const data = req.data;
  return data;
});
