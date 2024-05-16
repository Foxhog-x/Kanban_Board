import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { SnackBarContext } from "../context/SnackBarContext";

export default function PositionedSnackbar() {
  const [state, setState] = React.useContext(SnackBarContext);
  const { vertical, horizontal, open } = state;
  console.log(state, "this is state");
  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="List Deleted Successfully"
        key={vertical + horizontal}
      />
    </Box>
  );
}
