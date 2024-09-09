// ///////////////////////////////
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchGetRoomStatus } from "../../store/slices/hotel.js";
import RoomStatusModal from "../modal/RoomStatusModal.jsx";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "room", headerName: "Комната", width: 80 },
  {
    field: "имя",
    headerName: "Имя",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
  { field: "payment", headerName: "Оплата", type: "number", width: 90 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function RoomStatus() {
  const [open, setOpen] = useState(false);
  const roomStatus = useSelector((state) => state.hotelSlice.roomStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetRoomStatus());
  }, [dispatch]);

  const rows = roomStatus.map((room, i) => {
    return {
      id: i + 1,
      firstName: room.name,
      payment: room.payment,
      room: room.roomNumber,
    };
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Paper sx={{ width: "100%", border: "1px solid black" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        onRowClick={handleClickOpen}
        sx={{ border: 0 }}
      />
      <RoomStatusModal selectedValue={""} open={open} onClose={handleClose} />
    </Paper>
  );
}
