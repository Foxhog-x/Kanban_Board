/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";
import { MuiMenu } from "./MuiMenu";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { timeLeftFromNow } from "../utils/dateTime";
import { priorityColor } from "../utils/priorityColor";
import Badge from "@mui/material/Badge";

// import { Colorpalete } from "./Colorpalete";

export const Cards = ({ cardValue, handleCardClick }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );
  console.log(cardValue, "cardvalue");
  const card = (
    // <div className="cards_size">
    //   <div className="card_top_content">
    //     <div className="top_left_card">
    //       <small> </small>
    //       <div className="top_right_card">
    //
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className="card_center_content"
    //     onClick={() => handleCardClick(cardValue)}
    //   >
    //     <Typography
    //       sx={{
    //         display: "inline-block",
    //         width: " 350px",
    //         whiteSpace: "nowrap",
    //         overflow: " hidden !important",
    //         textOverflow: "ellipsis",
    //         fontWeight: "bold",
    //         textAlign: "left",
    //       }}
    //     >
    //       {cardValue.title}
    //     </Typography>
    //   </div>

    //   {/* <Colorpalete /> */}
    // </div>
    <Card variant="outlined" sx={{ maxWidth: 300 }}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" justifyContent="space-between">
          {" "}
          <Chip
            size="small"
            color={
              cardValue?.priority === "Low"
                ? "success"
                : cardValue?.priority === "Medium"
                ? "warning"
                : cardValue?.priority === "High"
                ? "error"
                : "default"
            }
            label={cardValue?.priority}
          />
          <Typography gutterBottom variant="h5" component="div">
            <MuiMenu />
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="start">
          <Typography color="text.secondary" align="left" variant="h6">
            Create node api for client and create a database
          </Typography>
        </Stack>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"end"}
          spacing={1.5}
        >
          <Badge badgeContent={0}>
            <AttachFileIcon fontSize="small" />
          </Badge>

          <Stack direction={"row"} justifyContent={"end"} alignItems={"center"}>
            <AccessTimeOutlinedIcon fontSize="small" />
            <small>{timeLeftFromNow(cardValue.due_date)}</small>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
  return (
    <Box
      sx={{
        minWidth: 200,
        borderRadius: "20px",
        marginTop: "25px",
      }}
    >
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
