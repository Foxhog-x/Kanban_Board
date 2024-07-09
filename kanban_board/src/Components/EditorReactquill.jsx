import { useRef, useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "../App.css";
import "react-quill/dist/quill.snow.css";

import Paper from "@mui/material/Paper";
import { modules } from "../utils/reactquillModules";


export const EditorReactquill = ({ setUpdatedText, card_id, newValue, handleEditSave, setEditBool, setHandleEditSave }) => {
    const [editorContent, setEditorContent] = useState(newValue);
    const handleEditorChange = (content) => {
        setEditorContent(content)
    }

    if (handleEditSave === true) {
        setEditBool(false)
        setHandleEditSave(false)
        setUpdatedText(editorContent)
        fetch('https://agile-boardnew.vercel.app/api/cards/update', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                card_id: card_id,
                data: editorContent
            })

        })
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
    )
}
