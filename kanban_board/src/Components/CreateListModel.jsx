import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextFieldCreateList } from "./TextFieldCreateList";

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

export const CreateListModel = ({
  createListModel,
  setCreateListModel,
  setCreateListPostApi,
  createListPostApi,
  handleCreateListPostapi,
  boardId,
}) => {
  const handleClose = () => setCreateListModel(false);

  return (
    <div>
      <Modal
        open={createListModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 200,
            borderRadius: "5px",
            border: "none",
            color: "black",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <h2>{toUpperCaseFunction(open.list_type)}</h2> */}
            <Box sx={{ textTransform: "capitalize", m: 2 }}>
              <TextFieldCreateList
                handleCreateListPostapi={handleCreateListPostapi}
                setCreateListPostApi={setCreateListPostApi}
                boardId={boardId}
              />
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          ></Typography>{" "}
        </Box>
      </Modal>
    </div>
  );
};
