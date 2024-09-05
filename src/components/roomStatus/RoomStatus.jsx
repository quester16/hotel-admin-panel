// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { useSelector } from "react-redux";
//
//
// export default function RoomStatus() {
//   const roomStatus = useSelector((state) => state.hotelSlice.roomStatus);
//
//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 450 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ fontWeight: "bold" }}>Имя</TableCell>
//             <TableCell align="right" sx={{ fontWeight: "bold" }}>
//               Комната
//             </TableCell>
//             <TableCell sx={{ fontWeight: "bold" }} align="right">
//               Дата выезда
//             </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {roomStatus.map((room) => (
//             <TableRow
//               key={room.name}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell component="th" scope="om">
//                 {room.name}
//               </TableCell>
//               <TableCell align="right">{room.roomNumber}</TableCell>
//               <TableCell align="right">{room.date}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
// ///////////////////////////////
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGetRoomStatus } from "../../store/slices/hotel.js";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  // { field: "firstName", headerName: "First name", width: 130 },
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

export default function DataTable() {
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
  // const rows = [
  //   { id: 1, lastName: "Snow", firstName: "Jon", payment: 35 },
  //   { id: 2, lastName: "Lannister", firstName: "Cersei", payment: 42 },
  //   { id: 3, lastName: "Lannister", firstName: "Jaime", payment: 45 },
  //   { id: 4, lastName: "Stark", firstName: "Arya", payment: 16 },
  //   { id: 5, lastName: "Targaryen", firstName: "Daenerys", payment: null },
  //   { id: 6, lastName: "Melisandre", firstName: null, payment: 150 },
  //   { id: 7, lastName: "Clifford", firstName: "Ferrara", payment: 44 },
  //   { id: 8, lastName: "Frances", firstName: "Rossini", payment: 36 },
  //   { id: 9, lastName: "Roxie", firstName: "Harvey", payment: 65 },
  // ];

  return (
    <Paper sx={{ height: 400, width: "100%", border: "1px solid black" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
