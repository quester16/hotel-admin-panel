import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../axios";

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
    changeRoomsList: (state, action) => {
      console.log("i'm changelist");
      state.rooms = state.rooms.filter(
        (room) => room.roomNumber !== action.payload
      );
    },
    addRoomStatus: (state, action) => {
      state.roomStatus.push(action.payload);
    },
    removeRoomStatus: (state, action) => {
      state.roomStatus = state.roomStatus.filter(
        (room) => room.id !== action.payload
      );
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
      })
      // getting room status from db
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

export const { changeRoomsList, addRoomStatus, removeRoomStatus } =
  hotelSlice.actions;

export const fetchRooms = createAsyncThunk("hotel/fetchRooms", async () => {
  const req = await axios.get("/rooms");
  return req.data;
});

export const fetchPostRoomStatus = createAsyncThunk(
  "hotel/fetchPostRoomStatus",
  async (prop) => {
    const req = await axios.post("/roomStatus", prop);
    return req.data;
  }
);

export const fetchGetRoomStatus = createAsyncThunk(
  "hotel/fetchGetRoomStatus",
  async () => {
    const req = await axios.get("/roomStatus");
    return req.data;
  }
);

export const fetchDeleteRoomStatus = createAsyncThunk(
  "hotel/fetchDeleteRoomStatus",
  async (prop) => {
    await axios.delete("/roomStatus/" + prop);
  }
);
