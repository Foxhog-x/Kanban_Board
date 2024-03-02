// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const TextFieldFormProps = () => {
  return (
    <Box
      component="form"
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          variant="outlined"
          id="outlined-required"
          label="Create New Task"
          defaultValue=""
          maxRows={2}
          style={{ width: "100%", fontSize: "18px", marginBottom: "16px" }}
        />

        <TextField
          label="Description"
          multiline
          rows={4} // Adjust the number of rows as needed
          variant="outlined"
          fullWidth // Optionally, to make it take the full width
        />
      </div>
    </Box>
  );
};
