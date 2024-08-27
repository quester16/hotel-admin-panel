import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { useDispatch } from "react-redux";
import { makeEntry } from "../../store/slices/hotel";

export default function Modal(props) {
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
            formData.append("roomNumber", props.roomNumber);
            const formJson = Object.fromEntries(formData.entries());
            console.log(formJson);
            dispatch(makeEntry(formJson));
            handleClose();
          },
        }}
      >
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Имя заселенца"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="date"
            name="date"
            label="дата выезда"
            type="date"
            fullWidth
            variant="standard"
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
