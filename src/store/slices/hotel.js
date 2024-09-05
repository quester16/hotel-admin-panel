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
    // makeEntry: (state, action) => {
    //   state.roomStatus.push(action.payload);
    // },
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
      })

      .addCase(fetchGetRoomStatus.pending, (state) => {
        state.loading = true;
        state.error = false;
        state.roomStatus = [];
      })
      .addCase(fetchGetRoomStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.roomStatus = action.payload;
      })
      .addCase(fetchGetRoomStatus.rejected, (state) => {
        state.loading = false;
        state.error = true;
        state.roomStatus = [];
      });
  },
});

export default hotelSlice.reducer;

export const { makeEntry } = hotelSlice.actions;

export const fetchRooms = createAsyncThunk("hotel/fetchRooms", async () => {
  const req = await axios.get("http://localhost:3000/rooms");
  return req.data;
});

export const fetchPostRoomStatus = createAsyncThunk(
  "hotel/fetchPostRoomStatus",
  async (prop) => {
    const req = await axios.post("http://localhost:3000/roomStatus", prop);
    return req.data;
  },
);

export const fetchGetRoomStatus = createAsyncThunk(
  "hotel/fetchGetRoomStatus",
  async () => {
    const req = await axios.get("http://localhost:3000/roomStatus");
    return req.data;
  },
);
