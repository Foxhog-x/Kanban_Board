import * as React from "react";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const MuiMenu = ({ list_column_id, reRender, setReRender }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // console.log(list_column_id, "col");
  const handleDeleteApi = () => {
    fetch("http://localhost:8000/api/list_column/delete", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        column_id: list_column_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setReRender(!reRender);
        }
      });
    setAnchorEl(null);
  };

  return (
    <div className="top_right_avatars">
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>{"Move->>"}</MenuItem>
        <MenuItem onClick={handleDeleteApi}>Delete</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
      </Menu>
    </div>
  );
};
