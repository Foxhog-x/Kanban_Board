/* eslint-disable react/prop-types */

import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { dateTimeConverter, timeLeftFromNow } from "../utils/dateTime";
import Divider from "@mui/material/Divider";
import { priorityColor } from "../utils/priorityColor";

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

export const CardInfoModel = ({
  // eslint-disable-next-line react/prop-types
  showCardInfoInModel,
  // eslint-disable-next-line react/prop-types
  basicModelOpen,
  // eslint-disable-next-line react/prop-types
  setBasicModelOpen,
}) => {
  const handleClose = () => setBasicModelOpen(false);
  console.log(showCardInfoInModel, "showing card info model");
  return (
    <div>
      <Modal
        open={basicModelOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            ...style,
            minWidth: 200,
            minHeight: 400,
            border: "none",

            color: "black",
          }}
        >
          {" "}
          <Typography
            sx={{
              display: "flex",

              justifyContent: "space-between",
            }}
          >
            <Typography>
              <small
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  fontFamily: "Signika",
                  textAlign: "last",
                }}
              >
                {showCardInfoInModel.name}
              </small>
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <Box sx={{ textTransform: "capitalize", textAlign: "end" }}>
                Due Date
              </Box>
              <Typography
                sx={{ fontWeight: 600 }}
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {dateTimeConverter(showCardInfoInModel.due_date)}
              </Typography>
            </Typography>
          </Typography>
          <Divider variant="fullWidth" />
          <Typography sx={{ mt: 1 }}>
            <small
              style={{
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Signika",
              }}
            >
              Task Title :
            </small>
          </Typography>
          <Typography sx={{ mt: 1, ml: 2, fontWeight: 500, fontSize: 18 }}>
            {showCardInfoInModel.title}
          </Typography>
          <Typography sx={{ mt: 1 }}>
            <small
              style={{
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Signika",
              }}
            >
              Descriptions :
            </small>
          </Typography>
          <Typography
            sx={{ mt: 1, ml: 2, mb: 1, fontWeight: 400, fontSize: 14 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea. Lorem
            ipsum dolor sit amet.
          </Typography>
          <Divider />
          <Typography sx={{ mt: 3 }}>
            <small
              style={{
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Signika",
              }}
            >
              Priority : {showCardInfoInModel.priority}{" "}
              {priorityColor(priorityColor.priority)}
            </small>
          </Typography>
          <Typography
            sx={{
              ml: 2,
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {timeLeftFromNow(showCardInfoInModel.due_date)}
          </Typography>
          <Typography sx={{ mt: 3 }}>
            <small
              style={{
                fontWeight: "bold",
                fontSize: 16,
                fontFamily: "Signika",
              }}
            >
              Assigned To :
            </small>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
