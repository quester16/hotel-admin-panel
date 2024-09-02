import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function RoomStatus() {
  const roomStatus = useSelector((state) => state.hotelSlice.roomStatus);
  console.log(roomStatus);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Имя</TableCell>
            <TableCell align="right" sx={{ fontWeight: "bold" }}>
              Комната
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Дата выезда
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roomStatus.map((room) => (
            <TableRow
              key={room.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="om">
                {room.name}
              </TableCell>
              <TableCell align="right">{room.roomNumber}</TableCell>
              <TableCell align="right">{room.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
