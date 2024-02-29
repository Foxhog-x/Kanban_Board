import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CheckBox } from "./CheckBox";

export const Cards = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    ></Box>
  );

  const card = (
    <div className="cards_size">
      <CardContent>
        <Typography sx={{ fontSize: 12, textAlign: "left" }}>
          Department-
        </Typography>
        <Typography
          sx={{
            fontSize: 14,
            textAlign: "left",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            // display: "flex",
            // justifyContent: "flex-start",
            // alignItems: "center",
          }}
          color="text.secondary"
          gutterBottom
        >
          <CheckBox />
          <Typography sx={{ fontSize: 18 }}>Task</Typography>
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </div>
  );
  return (
    <Box sx={{ minWidth: 200, borderRadius: "20px" }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};
