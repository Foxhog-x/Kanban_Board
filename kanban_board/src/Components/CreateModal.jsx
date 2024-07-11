/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { TextFieldFormProps } from "./TextFieldFormProps";
import { DueDate } from "./DueDate";
import "dayjs/locale/en-gb";
import dayjs from "dayjs";
import AutocompleteAssignUser from "./AutocompleteAssignUsers";
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
import { clearCard } from "../utils/clearCardFields";
import apiUrl from "../utils/urls";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CreateModals = ({ open, setOpen, setReRender, reRender }) => {
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
    assignee_id: [],
    priority: "",
    colorSchemes_id: "",
    department: "",
    status: "",
  });
  console.log(cardData);
  const handleCreateTaskApi = async (e) => {
    e.preventDefault();
    fetch(apiUrl.createCard, {
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
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setOpen(false);
    setTimeout(() => {
      setReRender(!reRender);
    }, 300);
    clearCard(setCardData);
    labelArray.length = 0;
  };

  useEffect(() => {
    setCardData((prev) => {
      return {
        ...prev,
        start_date: dayjs(new Date()).locale("en-gb").format("YYYY-MM-DD"),
      };
    });
  }, []);
  const handleClose = () => {
    setOpen((prev) => {
      return { ...prev, boolean: false, list_type: "", column_id: "" };
    });
    clearCard(setCardData);
  };
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
          <TextFieldFormProps open={open} setCardData={setCardData} />
          <Box mt={2} maxWidth={500} justifyContent={"center"}>
            <DueDate setCardDataDate={setCardData} />
          </Box>
          <Stack direction={"row"} mt={2} justifyContent={"flex-start"} gap={2}>
            <Box width={100} marginRight={5}>
              <Priority setCardData={setCardData} />
            </Box>
            <TextField
              autoComplete="off"
              error={errorLable}
              onFocus={() => handleFocusFunction()}
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
          <Stack
            maxWidth={300}
            mt={2}
            gap={1}
            direction={"row"}
            overflowwrap="break-word"
          >
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
export const CreateModal = React.memo(CreateModals);
