import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

export const FlatAddIcon = () => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};
