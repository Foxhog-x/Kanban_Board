// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// eslint-disable-next-line react/prop-types
export const TextFieldCreateList = ({
  handleCreateListPostapi,
  setCreateListPostApi,
  addListTextFieldRef,
}) => {
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
          inputRef={addListTextFieldRef}
          variant="outlined"
          id="outlined-required"
          label="Add New Column"
          defaultValue=""
          maxRows={2}
          style={{ width: "100%", fontSize: "18px", marginBottom: "12px" }}
          onChange={(e) =>
            setCreateListPostApi((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <Button onClick={(e) => handleCreateListPostapi(e)} variant="contained">
          Done
        </Button>
      </div>
    </Box>
  );
};
