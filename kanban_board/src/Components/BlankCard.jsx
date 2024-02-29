import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";
import { MuiMenu } from "./MuiMenu";
export const BlankCard = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const card = <div className="cards_size" style={{ height: 50 }}></div>;
  return (
    <Box sx={{ minWidth: 200, borderRadius: "20px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
