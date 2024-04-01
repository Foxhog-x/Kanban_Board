import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CardContext } from "../context/CardContext";

export const MuiMenuCard = ({ reRender, setReRender }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { card_id } = React.useContext(CardContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteApi = () => {
    fetch("http://localhost:8000/api/cards/delete", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        card_id: card_id,
      }),
    }).then((res) => res.json());

    setAnchorEl(null);
    setReRender(!reRender);
  };

  return (
    <div className="top_right_avatars">
      <Button
        id="basic-button"
        style={{
          maxWidth: "30px",
          maxHeight: "30px",
          minWidth: "30px",
          minHeight: "30px",
        }}
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Move</MenuItem>
        <MenuItem onClick={handleDeleteApi}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div>
  );
};
