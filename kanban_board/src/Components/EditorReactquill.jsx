import { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "../App.css";
import "react-quill/dist/quill.snow.css";

import Paper from "@mui/material/Paper";
import { modules } from "../utils/reactquillModules";
import apiUrl from "../utils/urls";

export const EditorReactquill = ({
  setUpdatedText,
  card_id,
  newValue,
  handleEditSave,
  setEditBool,
  setHandleEditSave,
}) => {
  const [editorContent, setEditorContent] = useState(newValue);
  const handleEditorChange = (content, delta, source, editor) => {
    setEditorContent(content);
  };

  if (handleEditSave === true) {
    setEditBool(false);
    setHandleEditSave(false);
    setUpdatedText(editorContent);
    fetch(apiUrl.updateCard, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card_id: card_id,
        data: editorContent,
      }),
    });
  }
  return (
    <Paper>
      <ReactQuill
        className="ql-container ql-tooltip ql-editing"
        modules={modules}
        theme="snow"
        value={editorContent}
        onChange={handleEditorChange}
      />
    </Paper>
  );
};
