import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Modal from "../modal/Modal";
import "./style.scss";

import double from "../../assets/beds/double-bed.png";
import single from "../../assets/beds/single-bed.png";
import two from "../../assets/beds/two-bed.png";
import vip from "../../assets/beds/vip.png";

export default function Room(props) {
  // eslint-disable-next-line react/prop-types
  const { roomNumber, roomType } = props.rooms;

  return (
    <>
      <Card sx={{ width: 240, height: 160, border: "2px solid gray" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <Box display="flex" alignContent="center" gap="30px">
              {roomNumber}
              <Box display="flex" alignContent="center" gap="10px">
                <img
                  src={
                    roomType === "single"
                      ? single
                      : roomType === "double"
                        ? double
                        : roomType === "separated"
                          ? two
                          : vip
                  }
                  alt={roomType}
                />
                <Chip label={roomType} />
              </Box>
            </Box>
          </Typography>
        </CardContent>
        <CardActions>
          <Modal roomNumber={roomNumber} />
        </CardActions>
      </Card>
    </>
  );
}
