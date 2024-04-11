/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import "../App.css";
import { TextFieldFormProps } from "./TextFieldFormProps";
// import { useEffect, useState } from "react";
import DueDate from "./DueDate";
import "dayjs/locale/en-gb";
// // import { useEffect, useState } from "react";
// import Button from "@mui/material/Button";
import dayjs from "dayjs";
import AutocompleteAssignUser from "./AutocompleteAssignUsers";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// // eslint-disable-next-line react/prop-types
// export const CreateModal = ({ open, setOpen, setReRender, reRender }) => {
//   const priorityType = ["Low", "Medium", "High"];
//   const colorSchemes = ["green", "yellow", "red"];
//   const [cardData, setCardData] = useState({
//     column_id: "",
//     title: "",
//     description: "",
//     start_date: "",
//     due_date: "",
//     assignee_id: "",
//     priority: "",
//     colorSchemes_id: "",
//     department: "",
//     status: "",
//   });

//   const handleCreateTaskApi = (e) => {
//     e.preventDefault();
//     fetch("http://localhost:8000/api/cards/create", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         title: cardData.title,
//         description: cardData.description,
//         column_id: open.column_id,
//         start_date: cardData.start_date,
//         due_date: cardData.due_date,
//         assignee_id: cardData.assignee_id,
//         department: cardData.department,
//         priority: cardData.priority,
//       }),
//     });
//     setOpen(false);
//     setTimeout(() => {
//       setReRender(!reRender);
//     }, 300);
//   };

//   useEffect(() => {
//     setCardData((prev) => {
//       return {
//         ...prev,
//         start_date: dayjs(new Date()).locale("en-gb").format("YYYY-MM-DD"),
//       };
//     });
//   }, []);

//   const handleClose = () =>
//     setOpen((prev) => {
//       return { ...prev, boolean: false, list_type: "", column_id: "" };
//     });
//   console.log(cardData, "card data");
//   return (
//     <div>
//       <Modal
//         open={open.boolean}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             ...style,
//             width: 450,
//             minHeight: 450,
//             border: "none",
//             color: "black",
//           }}
//         >
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             {/* <h2>{toUpperCaseFunction(open.list_type)}</h2> */}
//             <Box sx={{ color: "white", textTransform: "capitalize", m: 2 }}>
//               {open.list_type}
//             </Box>
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <TextFieldFormProps setCardData={setCardData} />
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <DueDate setCardDataDate={setCardData} />
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <AutocompleteAssignUser setCardDataAssign={setCardData} />
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             <Typography
//               sx={{
//                 display: "flex",
//                 gap: "5px",
//                 padding: "5px",
//                 margin: "5px",
//                 flexDirection: "column",
//               }}
//             >
//               <div
//                 style={{
//                   textAlign: "start",
//                   marginLeft: "3px",
//                 }}
//               >
//                 <Typography>Set Priority</Typography>
//               </div>
//               {cardData.priority !== "" ? (
//                 <span
//                   style={{
//                     backgroundColor: colorSchemes[cardData?.colorSchemes_id],
//                   }}
//                   className="Create_colorPalet_circle"
//                   onClick={() =>
//                     setCardData((prev) => {
//                       return { ...prev, priority: "" };
//                     })
//                   }
//                 ></span>
//               ) : (
//                 <div
//                   style={{
//                     display: "flex",
//                     gap: "20px",
//                     alignItems: "center",
//                     padding: "12px",
//                   }}
//                 >
//                   {priorityType.map((value, index) => {
//                     return (
//                       // eslint-disable-next-line react/jsx-key
//                       <button
//                         key={index}
//                         style={{
//                           backgroundColor: colorSchemes[index],
//                           color: "black",
//                           width: "60px",
//                           height: "35px",
//                           border: "none",

//                           fontWeight: "500px",
//                         }}
//                         onClick={() =>
//                           setCardData((prev) => {
//                             return {
//                               ...prev,
//                               priority: value,
//                               colorSchemes_id: index,
//                             };
//                           })
//                         }
//                       >
//                         {value}
//                       </button>
//                     );
//                   })}
//                 </div>
//               )}
//             </Typography>
//           </Typography>
//           <Typography sx={{ textAlign: "end" }}>
//             <Button
//               type="submit"
//               onClick={(e) => handleCreateTaskApi(e)}
//               variant="contained"
//             >
//               Create
//             </Button>
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// };
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";
import { useState } from "react";
import { Priority } from "./Priority";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useRef } from "react";
import Chip from "@mui/material/Chip";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export const CreateModal = ({ open, setOpen, setReRender, reRender }) => {
  const priorityType = ["Low", "Medium", "High"];
  const colorSchemes = ["green", "yellow", "red"];
  const [pickColor, setPickColor] = useState(false);
  const handleLabelInputRef = useRef(null);
  const [selectLabel, setSelectLable] = useState("");
  const [labelArray, setLableArray] = useState([]);
  const [errorLable, setErrorLable] = useState(false);
  const [helperText, setHelperText] = useState("");
  const [cardData, setCardData] = useState({
    column_id: "",
    title: "",
    description: "",
    start_date: "",
    due_date: "",
    assignee_id: "",
    priority: "",
    colorSchemes_id: "",
    department: "",
    status: "",
  });

  const handleCreateTaskApi = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/cards/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: cardData.title,
        description: cardData.description,
        column_id: open.column_id,
        start_date: cardData.start_date,
        due_date: cardData.due_date,
        assignee_id: cardData.assignee_id,
        department: cardData.department,
        priority: cardData.priority,
        addLabelList: labelArray,
      }),
    });
    setOpen(false);
    setTimeout(() => {
      setReRender(!reRender);
    }, 300);
  };
  console.log(cardData);
  useEffect(() => {
    setCardData((prev) => {
      return {
        ...prev,
        start_date: dayjs(new Date()).locale("en-gb").format("YYYY-MM-DD"),
      };
    });
  }, []);

  const handleClose = () =>
    setOpen((prev) => {
      return { ...prev, boolean: false, list_type: "", column_id: "" };
    });

  const handleAddLableButton = () => {
    if (labelArray.length !== 0) {
      if (labelArray.includes(selectLabel)) {
        setHelperText("Label already added ");
        setErrorLable(true);
      } else if (selectLabel == "") {
        setHelperText("empty lable");
        setErrorLable(true);
      } else {
        setLableArray((prev) => {
          return [...prev, selectLabel];
        });
      }
    } else {
      selectLabel !== ""
        ? setLableArray((prev) => {
            return [...prev, selectLabel];
          })
        : "";
    }
    setSelectLable("");
    handleLabelInputRef.current.value = "";
  };

  const handleDeleteChip = (i) => {
    const deletedLable = labelArray[i];
    const newLableArray = labelArray.filter((value) => value !== deletedLable);
    setLableArray(newLableArray);
  };

  const handleFocusFunction = () => {
    setErrorLable(false);
    setHelperText("");
  };
  console.log(selectLabel, "its select label");
  console.log(labelArray, " this is label array");
  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open.boolean}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {open.list_type}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <TextFieldFormProps setCardData={setCardData} />
          <Box mt={2} justifyContent={"center"}>
            <DueDate setCardDataDate={setCardData} />
          </Box>
          <Stack direction={"row"} mt={2} justifyContent={"flex-start"} gap={5}>
            <Box width={100}>
              <Priority setCardData={setCardData} />
            </Box>
            <TextField
              error={errorLable}
              onFocus={() => handleFocusFunction()}
              helperText={helperText}
              inputRef={handleLabelInputRef}
              onChange={(e) => setSelectLable(e.target.value)}
              id="standard-basic"
              label="Add Lable"
              variant="standard"
            />

            <Box display={"flex"}>
              <Button onClick={handleAddLableButton}>Add</Button>
            </Box>
          </Stack>
          <Stack maxWidth={300} mt={2} gap={1} direction={"row"}>
            {labelArray.map((value, i) => {
              return (
                <Chip
                  key={value}
                  label={value}
                  variant="outlined"
                  onDelete={() => handleDeleteChip(i)}
                />
              );
            })}
          </Stack>
          <Box mt={2} maxWidth={500}>
            <AutocompleteAssignUser setCardDataAssign={setCardData} />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            type="submit"
            onClick={(e) => handleCreateTaskApi(e)}
            variant="contained"
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};
