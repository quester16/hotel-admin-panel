import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRooms } from "../../store/slices/hotel";
import RoomsErrorBoundary from "../ErrorBoundaries/RoomsErrorBoundary";
import RoomSkeleton from "../room-skeleton/RoomSkeleton";
import Room from "./Room";

const RoomList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  // const rooms = useSelector((state) => state.hotelSlice.rooms);
  const { loading, error, rooms } = useSelector((state) => state.hotelSlice);

  let emptyArray = Array.from({ length: 8 });

  const skeleton = loading
    ? emptyArray.map((_, i) => {
        return <RoomSkeleton key={i} />;
      })
    : null;
  const errorBoundary = error ? <RoomsErrorBoundary /> : null;
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
    >
      {skeleton}
      {errorBoundary}
      {content}
    </Box>
  );
};

export default RoomList;
