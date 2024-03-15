/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";
import { MuiMenu } from "./MuiMenu";

import { useState } from "react";

// import { Colorpalete } from "./Colorpalete";

export const Cards = ({ cardValue, handleCardClick }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const card = (
    <div className="cards_size">
      <div className="card_top_content">
        <div className="top_left_card">
          <small> </small>
          <div className="top_right_card">
            <MuiMenu />
          </div>
        </div>
      </div>
      <div
        className="card_center_content"
        onClick={() => handleCardClick(cardValue)}
      >
        <Typography
          sx={{
            display: "inline-block",
            width: " 350px",
            whiteSpace: "nowrap",
            overflow: " hidden !important",
            textOverflow: "ellipsis",
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {cardValue.title}
        </Typography>
      </div>

      {/* <Colorpalete /> */}
    </div>
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
