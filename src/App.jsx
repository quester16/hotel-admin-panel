import { Box } from "@mui/material";
import React from "react";
import Header from "./components/header/header";
import RoomsList from "./components/roomList/RoomList";
import RoomStatus from "./components/roomStatus/RoomStatus";

function App() {
  return (
    <>
      <Header />
      <Box display="flex" maxWidth={1500}>
        <RoomsList />
        <Box className="notif" border="1px solid black" maxWidth={500}>
          <RoomStatus />
        </Box>
      </Box>
    </>
  );
}

export default App;
