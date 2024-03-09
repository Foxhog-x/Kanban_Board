/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../App.css";
import { TextFieldFormProps } from "./TextFieldFormProps";
import { useEffect, useState } from "react";
import DueDate from "./DueDate";
import "dayjs/locale/en-gb";
// import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import AutocompleteAssignUser from "./AutocompleteAssignUsers";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// eslint-disable-next-line react/prop-types
export const CreateModal = ({ open, setOpen }) => {
  const priorityType = ["Low", "Medium", "High"];
  const colorSchemes = ["green", "yellow", "red"];
  const [cardData, setCardData] = useState({
    card_id: "",
    list_id: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    priority: "",
    colorSchemes_id: "",
    department_type: "",
  });
  console.log(cardData);
  const handleCreateTaskApi = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/boards/list_type/cards/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: cardData.title,
        description: cardData.description,
        department_type: cardData.department_type,
        startDate: cardData.startDate,
        endDate: cardData.endDate,
        priority: cardData.priority,
      }),
    });
  };
  useEffect(() => {
    setCardData((prev) => {
      return {
        ...prev,
        startDate: dayjs(new Date()).locale("en-gb").format("DD-MM-YYYY"),
      };
    });
  }, []);

  const handleClose = () =>
    setOpen((prev) => {
      return { ...prev, boolean: false, list_type: "" };
    });

  // const list_name = open.list_type;
  return (
    <div>
      <Modal
        // eslint-disable-next-line react/prop-types
        open={open.boolean}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: 450,
            minHeight: 450,
            border: "none",
            color: "black",
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {/* <h2>{toUpperCaseFunction(open.list_type)}</h2> */}
            <Box sx={{ textTransform: "capitalize", m: 2 }}>
              {open.list_type}
            </Box>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextFieldFormProps setCardData={setCardData} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <DueDate setCardDataDate={setCardData} />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AutocompleteAssignUser />
          </Typography>{" "}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Typography
              sx={{
                display: "flex",
                gap: "5px",
                padding: "5px",
                margin: "5px",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  textAlign: "start",
                  marginLeft: "3px",
                }}
              >
                <Typography>Set Priority</Typography>
              </div>
              {cardData.priority !== "" ? (
                <span
                  style={{
                    backgroundColor: colorSchemes[cardData?.colorSchemes_id],
                  }}
                  className="Create_colorPalet_circle"
                  onClick={() =>
                    setCardData((prev) => {
                      return { ...prev, priority: "" };
                    })
                  }
                ></span>
              ) : (
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    alignItems: "center",
                    padding: "12px",
                  }}
                >
                  {priorityType.map((value, index) => {
                    return (
                      // eslint-disable-next-line react/jsx-key
                      <button
                        key={index}
                        style={{
                          backgroundColor: colorSchemes[index],
                          color: "black",
                          width: "60px",
                          height: "35px",
                          border: "none",

                          fontWeight: "500px",
                        }}
                        onClick={() =>
                          setCardData((prev) => {
                            return {
                              ...prev,
                              priority: value,
                              colorSchemes_id: index,
                            };
                          })
                        }
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              )}
            </Typography>
          </Typography>
          <Typography sx={{ textAlign: "end" }}>
            <Button onClick={(e) => handleCreateTaskApi(e)} variant="contained">
              Create
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
