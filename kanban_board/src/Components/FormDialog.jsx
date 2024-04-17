import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({
  openFormDialogBoard,
  setOpenFormDialogBoard,
  handleCreateBoardApi,
}) {
  const handleClose = () => {
    setOpenFormDialogBoard((prev) => {
      return { ...prev, bool: false, board_Type: "" };
    });
  };
  console.log(openFormDialogBoard);
  return (
    <React.Fragment>
      <Dialog
        open={openFormDialogBoard.bool}
        onClose={handleClose}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries(formData.entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   },
        // }}
      >
        <DialogTitle>{openFormDialogBoard.board_Type} Board </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="board_name"
            label="Create Board"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) =>
              setOpenFormDialogBoard((prev) => {
                return { ...prev, board_name: e.target.value };
              })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={(e) => handleCreateBoardApi(e)}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
