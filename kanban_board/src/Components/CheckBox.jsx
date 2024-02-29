import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const CheckBox = () => {
  return (
    <div>
      <Checkbox {...label} />
    </div>
  );
};
