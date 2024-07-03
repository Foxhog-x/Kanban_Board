import { useRef, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "../App.css";
import "react-quill/dist/quill.snow.css";

import Paper from "@mui/material/Paper";
import { modules } from "../utils/reactquillModules";
import { EditorReactquill } from "./EditorReactquill";

export const Reactquill = ({ card_id, open, editableText, setCardData, editBool, setEditBool, setHandleEditSave, handleEditSave }) => {
  let newValue = editableText;
  const quillRef = useRef(null);

  const [updatedText, setUpdatedText] = useState(newValue)

  const handleChange = (el) => {
    if (open) {
      setCardData((prev) => {
        return { ...prev, description: el };
      });
    }
  };

  return (
    <Paper>
      {editBool ? <EditorReactquill setUpdatedText={setUpdatedText} card_id={card_id} newValue={updatedText} setHandleEditSave={setHandleEditSave} setEditBool={setEditBool} handleEditSave={handleEditSave} /> :
        <ReactQuill
          ref={quillRef}
          className="ql-container ql-tooltip ql-editing"
          modules={modules}
          theme="snow"
          value={updatedText}
          onChange={handleChange}
        />}
    </Paper>
  );
};
