// ///////////////////////////////
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetRoomStatus } from "../../store/slices/hotel.js";
import RoomStatusModal from "../modal/RoomStatusModal.jsx";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "room", headerName: "Комната", width: 80 },
  {
    field: "name",
    headerName: "Имя",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 120,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  {
    field: "checkoutDate",
    headerName: "Дата выезда",
    type: "object",
    width: 100,
  },
  { field: "payment", headerName: "Оплата", type: "number", width: 90 },
];

const paginationModel = { page: 0, pageSize: 10 };

export default function RoomStatus() {
  const [open, setOpen] = useState(false);
  const [roomData, setRoomData] = useState({});
  const roomStatus = useSelector((state) => state.hotelSlice.roomStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetRoomStatus());
  }, []);

  const rows = roomStatus.map((room, i) => {
    return {
      id: i + 1,
      firstName: room.name,
      payment: room.payment,
      room: room.roomNumber,
      checkoutDate: room.date,
      dataId: room.id,
    };
  });

  const handleClickOpen = (val) => {
    setOpen(true);
    setRoomData({ ...val.row });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Paper sx={{ width: "100%", border: "1px solid black" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[10, 15]}
        checkboxSelection={false}
        onRowClick={handleClickOpen}
        sx={{ border: 0 }}
      />
      <RoomStatusModal open={open} onClose={handleClose} roomData={roomData} />
    </Paper>
  );
}
