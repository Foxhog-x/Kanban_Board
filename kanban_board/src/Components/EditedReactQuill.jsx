
import ReactQuill from "react-quill";
import "../App.css";
import "react-quill/dist/quill.snow.css";
import { modules } from "../utils/reactquillModules";

import Paper from "@mui/material/Paper";
export const EditedReactQuill = ({ newValue, setCardData, setValuex }) => {
    const newvalueofx = newValue



    const handleChange = (el) => {
        setValuex(() => {
            newvalueofx.map((value))
        })
    };
    return (
        <Paper>
            <ReactQuill
                className="ql-container ql-tooltip ql-editing"
                modules={modules}
                theme="snow"
                value={newValue}
                onChange={handleChange}
            />
        </Paper>
    )
}
