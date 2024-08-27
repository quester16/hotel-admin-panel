import { Box } from "@mui/material";
import Room from "./Room";
import { useEffect } from "react";
import { fetchRooms } from "../../store/slices/hotel";
import { useDispatch, useSelector } from "react-redux";
import RoomSkeleton from "../room-skeleton/RoomSkeleton";

const RoomList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, []);

  const rooms = useSelector((state) => state.rooms);
  const loading = useSelector((state) => state.loading);

  let emptyArray = Array.from({ length: 8 });

  return (
    <Box display="flex" flexDirection="row" gap={2} flexWrap="wrap">
      {loading
        ? emptyArray.map((_, i) => {
            return <RoomSkeleton key={i} />;
          })
        : rooms.map((item, i) => {
            return <Room key={i} rooms={item} />;
          })}
    </Box>
  );
};

export default RoomList;
