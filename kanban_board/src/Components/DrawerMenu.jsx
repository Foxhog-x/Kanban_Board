import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import IconButton from "@mui/material/IconButton";
import { BoardContext } from "../context/BoardContext";
import { MeunAppWrapper } from "./helper/MeunAppWrapper";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

const DrawerMenus = ({
  setSettingBoard_id,
  handleBoardClick,
  handleCreateBoard,
  settingBoard_id,
  reRender,
  setReRender,
}) => {
  const BoardArray = { public: [], private: [] };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const boardValues = React.useContext(BoardContext);

  const filterBoardType = () => {
    boardValues && boardValues?.map((values) => {
      values.status === 0
        ? BoardArray.public.push(values.name, values.board_id)
        : values.status === 1
          ? BoardArray.private.push(values.name, values.board_id)
          : "";
    });
  };
  filterBoardType();

  const handleBoardDeleteApi = (board_id) => {
    if (board_id) {
      if (settingBoard_id === null) {
        alert("Please Select board First");
      } else {
        const result = confirm(
          "You are about to delete this Board, Do You sure ?"
        );
        if (result) {
          fetch("https://agile-boardnew.vercel.app/api/boards/delete", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              board_idDelete: board_id,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success === true) {
                localStorage.removeItem("Previous_board_id");
                setSettingBoard_id(null);
                setReRender(!reRender);
              }
            });
        }
      }
    }
  };

  const DrawerList = (
    <Box role="presentation">

      <List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
            margin: 10,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Public Board</Typography>
          <IconButton onClick={() => handleCreateBoard("Public")}>
            <AddIcon />
          </IconButton>
        </div>
        <Divider />
        {BoardArray?.public?.map((text, i) => {
          if (typeof text === "string") {
            return (

              <ListItem sx={{ display: "block" }} key={i} disablePadding onClick={toggleDrawer(false)}>

                <Link to={`boards/public/${text}`}>

                  <ListItemButton
                    onClick={() =>
                      handleBoardClick(BoardArray?.public[i + 1], "public")
                    }
                  >
                    <ListItemIcon>
                      <SpaceDashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />

                    {settingBoard_id === BoardArray?.public[i + 1] ? (
                      <CheckIcon />
                    ) : (
                      ''
                    )}
                    <IconButton
                      onClick={() =>
                        handleBoardDeleteApi(
                          BoardArray?.public[i + 1],
                          "public"
                        )
                      }
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </ListItemButton>


                </Link>

              </ListItem>

            );
          }
        })}
      </List>
      <List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 5,
            margin: 10,
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Private Board</Typography>
          <IconButton onClick={() => handleCreateBoard("Private")}>
            <AddIcon />
          </IconButton>
        </div>

        <Divider />

        {BoardArray.private?.map((text, i) => {
          if (typeof text === "string") {
            return (
              <ListItem sx={{ display: "block" }} key={i} disablePadding>
                <Link to={`boards/private/${text}`}>
                  <ListItemButton
                    onClick={() =>
                      handleBoardClick(BoardArray?.private[i + 1], "private", text)
                    }
                  >
                    <ListItemIcon>

                      <SpaceDashboardIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      color="green"
                      onClick={toggleDrawer(false)}
                    />
                    {settingBoard_id === BoardArray?.private[i + 1] ? (
                      <CheckIcon />
                    ) : (
                      ""
                    )}
                    <IconButton
                      onClick={() =>
                        handleBoardDeleteApi(BoardArray?.private[i + 1], "private")
                      }
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </ListItemButton>
                </Link>

              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
  return (
    <MeunAppWrapper>
      <span onClick={toggleDrawer(true)}>
        <MenuIcon />
      </span>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ flexDirection: "column-reverse" }}
      >
        {DrawerList}
        {/* <Box display={"flex"} flexDirection={"column-reverse"}>
          {DrawerList} */}
        {/* <Divider sx={{ mt: 10 }} />
          <List>
            <Typography padding={2} variant="h5">
         
            </Typography>
            <Divider sx={{ mt: 3 }} /> */}
        {/* <ListItem disablePadding>
              <ListItemButton onClick={handleApi}>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>

                <Link
                  to={"/calender"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItemText
                    primary={"Calender"}
                    ref={handleButtonRef}
                    onClick={toggleDrawer(false)}
                  />
                </Link>
              </ListItemButton>
            </ListItem> */}
        {/* /* </List>
        </Box> */}
      </Drawer>
    </MeunAppWrapper>
  );
};
export const DrawerMenu = React.memo(DrawerMenus);
