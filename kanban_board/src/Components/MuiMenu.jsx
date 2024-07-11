import * as React from "react";
import IconButton from "@mui/material/IconButton";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SnackBarContext } from "../context/SnackBarContext";
import apiUrl from "../utils/urls";

export const MuiMenu = ({ list_column_id, reRender, setReRender }) => {
  const [state, setState] = React.useContext(SnackBarContext);
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
    fetch(apiUrl.deleteList, {
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

          setState((state) => {
            return {
              ...state,
              open: true,
            };
          });

          setTimeout(() => {
            setState({ ...state, open: false });
          }, 3000);
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
