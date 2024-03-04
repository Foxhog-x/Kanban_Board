/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";
import { TextFieldFormProps } from "./TextFieldFormProps";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// eslint-disable-next-line react/prop-types
export const CreateModal = ({ open, setOpen }) => {
  const handleClose = () =>
    setOpen((prev) => {
      return { ...prev, boolean: false, list_type: "" };
    });

  // const list_name = open.list_type;
  return (
    <div>
      <Modal
        // eslint-disable-next-line react/prop-types
        open={open.boolean}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 450,
            height: 400,
            border: "none",
            color: "black",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <h2>{toUpperCaseFunction(open.list_type)}</h2> */}
            <Box sx={{ textTransform: "capitalize", m: 2 }}>
              {open.list_type}
            </Box>
          </Typography>
          <Typography></Typography>
          <TextFieldFormProps />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
        </Box>
      </Modal>
    </div>
  );
};
