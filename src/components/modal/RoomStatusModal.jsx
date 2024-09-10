import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import PropTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDeleteRoomStatus } from "../../store/slices/hotel";

export default function RoomStatusModal(props) {
  const dispatch = useDispatch();
  const { onClose, open, roomNumber, id } = props;
  const [selectedValue, setSelectedValue] = useState("");

  const handleClose = () => {
    onClose(selectedValue);
    selectedValue ? dispatch(fetchDeleteRoomStatus(id)) : null;
  };

  const onChange = (val) => {
    const target = val.target;
    target.checked ? setSelectedValue(target.value) : setSelectedValue("");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Комната {roomNumber}</DialogTitle>
      <FormGroup sx={{ p: "10px" }}>
        <FormControlLabel
          onChange={onChange}
          control={<Checkbox />}
          label="Checkout"
          value={"checkout"}
        />
        <Button variant="contained" type="submit" onClick={handleClose}>
          Ok
        </Button>
      </FormGroup>
    </Dialog>
  );
}

RoomStatusModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

// export function RoomSttusModal() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1" component="div">
//         Selected: {selectedValue}
//       </Typography>
//       <br />
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
