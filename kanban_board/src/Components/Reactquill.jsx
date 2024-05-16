import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "../App.css";
import "react-quill/dist/quill.snow.css";

import Paper from "@mui/material/Paper";
import { modules } from "../utils/reactquillModules";

export const Reactquill = ({ open, editableText, setCardData }) => {
  let newValue = editableText;

  const [value, setValue] = useState("");
  const [editBool, setEditBool] = useState(false);

  const handleChange = (el) => {
    setValue(el);
    setEditBool(true);
    if (open) {
      setCardData((prev) => {
        return { ...prev, description: el };
      });
    }
  };

  return (
    <Paper>
      <ReactQuill
        className="ql-container"
        modules={modules}
        theme="snow"
        value={newValue && newValue !== "" ? newValue : !editBool ? "" : value}
        onChange={handleChange}
      />
    </Paper>
  );
};