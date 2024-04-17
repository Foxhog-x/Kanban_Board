import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
// import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Stack from "@mui/material/Stack";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { DrawerMenu } from "./DrawerMenu";

export const MenuAppBar = ({
  children,
  setSwitchTheme,
  handleBoardClick,
  handleCreateBoard,
}) => {
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [changeDarkIcon, setChangeDarkIcon] = React.useState(false);
  const handleChecked = (event) => {
    setSwitchTheme(event.target.checked);
    setChangeDarkIcon(event.target.checked);
    return event.target.checked;
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        /> */}
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <DrawerMenu
              handleBoardClick={handleBoardClick}
              handleCreateBoard={handleCreateBoard}
            />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kanban-Board
          </Typography>

          <Stack spacing={2} direction="row">
            <Switch
              defaultChecked
              onChange={handleChecked}
              style={{ display: "flex", alignItems: "center" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              {changeDarkIcon ? <DarkModeIcon /> : <WbSunnyIcon />}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>{" "}
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
