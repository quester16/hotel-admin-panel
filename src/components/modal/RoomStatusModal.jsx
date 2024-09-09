import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import PropTypes from "prop-types";

export default function RoomStatusModal(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const onSubmit = (val) => {
    console.log(val);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <FormGroup sx={{ p: "10px" }} onSubmit={onSubmit}>
        <FormControlLabel control={<Checkbox />} label="Checkout" />
        <FormControlLabel control={<Checkbox />} label="Уборка" />
        <FormControlLabel control={<Checkbox />} label="Disabled" />
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
  selectedValue: PropTypes.string.isRequired,
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
