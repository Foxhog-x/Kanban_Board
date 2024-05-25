import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { SnackBarContext } from "../context/SnackBarContext";

export default function PositionedSnackbar() {
  const [state, setState] = React.useContext(SnackBarContext);
  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false, message: "" });
  };

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message={state.message}
        key={vertical + horizontal}
      />
    </Box>
  );
}
