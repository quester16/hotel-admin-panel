import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import {
  addRoomStatus,
  changeRoomsList,
  fetchPostRoomStatus,
} from "../../store/slices/hotel";
import * as React from "react";
import { FormLabel } from "@mui/material";

export default function RoomListModal(props) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Въезд
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            formData.append("roomNumber", +props.roomData.roomNumber);
            formData.append("id", props.roomData.id);
            const formJson = Object.fromEntries(formData.entries());
            dispatch(changeRoomsList(props.roomData.roomNumber));
            dispatch(fetchPostRoomStatus(formJson));
            dispatch(addRoomStatus(formJson));
            handleClose();
          },
        }}
      >
        <DialogContent>
          <strong>Комната {props.roomData.roomNumber}</strong>
          <TextField
            autoFocus
            required
            margin="normal"
            id="name"
            name="name"
            label="Имя заселенца"
            type="text"
            fullWidth
            variant="standard"
            value="said"
          />
          <FormLabel htmlFor="date">Дата Въезда</FormLabel>
          <TextField
            autoFocus
            required
            margin="none"
            id="date"
            name="date"
            type="date"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="payment"
            name="payment"
            label="оплата"
            type="number"
            fullWidth
            variant="standard"
            value="200"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button type="submit">Ок</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
