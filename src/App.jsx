import { Box } from "@mui/material";
import Header from "./components/header/header";
import RoomsList from "./components/roomList/RoomList";
import RoomStatus from "./components/roomStatus/RoomStatus";

function App() {
  return (
    <>
      <Header />
      <Box display="flex" maxWidth={1500} sx={{ margin: "0 auto" }}>
        <RoomsList />
        <Box className="notif" width={"500px"}>
          <RoomStatus />
        </Box>
      </Box>
    </>
  );
}

export default App;
