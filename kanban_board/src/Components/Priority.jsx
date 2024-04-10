import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const Priority = ({ setCardData }) => {
  const [pvalue, setPValue] = React.useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setPValue(value);
    setCardData((prev) => {
      return { ...prev, priority: event.target.value };
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Priority"
          onChange={handleChange}
          value={pvalue}
        >
          <MenuItem value={"Low"}>Low</MenuItem>
          <MenuItem value={"Medium"}>Medium</MenuItem>
          <MenuItem value={"High"}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
