import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";
import { MuiMenu } from "./MuiMenu";

export const Cards = () => {
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
          <small>Department</small>
          <div className="top_right_card">
            <MuiMenu />
          </div>
        </div>
      </div>
      <div className="card_center_content">
        <h5>TASK </h5>
      </div>
    </div>
  );
  return (
    <Box sx={{ minWidth: 200, borderRadius: "20px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
