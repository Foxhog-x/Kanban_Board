// eslint-disable-next-line no-unused-vars
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Reactquill } from "./Reactquill";

// eslint-disable-next-line react/prop-types
const TextFieldFormPropss = ({ open, setCardData }) => {
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
          style={{ width: "100%", fontSize: "18px", marginBottom: "12px" }}
          onChange={(e) =>
            setCardData((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <Reactquill open={open} setCardData={setCardData} />
        {/* <ReactQuill setCardData={setCardData} /> */}
        {/* <TextField
          label="Description"
          multiline
          rows={4} // Adjust the number of rows as needed
          variant="outlined"
          fullWidth // Optionally, to make it take the full width
          onChange={(e) =>
            setCardData((prev) => {
              return { ...prev, description: e.target.value };
            })
          }
        /> */}

        <TextField
          required
          variant="outlined"
          id="outlined-required"
          label="Department"
          defaultValue=""
          maxRows={2}
          style={{ width: "100%", fontSize: "18px", marginTop: "12px" }}
          onChange={(e) =>
            setCardData((prev) => {
              return { ...prev, department: e.target.value };
            })
          }
        />
      </div>
    </Box>
  );
};
export const TextFieldFormProps = React.memo(TextFieldFormPropss);
