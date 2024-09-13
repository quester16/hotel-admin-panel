import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/slices/hotel";
import RoomsErrorBoundary from "../ErrorBoundaries/RoomsErrorBoundary";
import RoomSkeleton from "../room-skeleton/RoomSkeleton";
import Room from "./Room";
import { createSelector } from "@reduxjs/toolkit";

const RoomList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);
  // надо доделать чтобы комната не отображалась при въезде
  // const roomListSelector = createSelector(
  //   (state) => state.hotelSlice.rooms,
  //   (state) => state.hotelSlice.roomStatus,
  //   (rooms, roomStatus) => {
  //     console.log(roomStatus);

  //     return rooms.filter((room, i) => room.id !== roomStatus[i].id);
  //   }
  // );
  // const rooms = useSelector(roomListSelector);
  // ? need to complete rooms to fade after entering
  const { loading, error, rooms } = useSelector((state) => state.hotelSlice);

  let emptyArray = Array.from({ length: 8 });

  const errorBoundary = error ? <RoomsErrorBoundary /> : null;
  const skeleton = loading
    ? emptyArray.map((_, i) => {
        return <RoomSkeleton key={i} />;
      })
    : null;
  const content = !(loading && error)
    ? rooms.map((item, i) => {
        return <Room key={i} rooms={item} />;
      })
    : null;

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={"10px"}
      flexWrap="wrap"
      width={1000}
      justifyContent={error ? "center" : ""}
      alignContent={error ? "center" : ""}
    >
      {skeleton}
      {errorBoundary}
      {content}
    </Box>
  );
};

export default RoomList;
