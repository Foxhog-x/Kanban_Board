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

const DrawerMenus = ({
  setSettingBoard_id,
  handleBoardClick,
  handleCreateBoard,
  settingBoard_id,
  reRender,
  setReRender,
}) => {
  const BoardArray = { public: [], private: [] };
  const handleButtonRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  console.log(handleButtonRef.current, "buttonRef");

  const boardValues = React.useContext(BoardContext);

  const filterBoardType = () => {
    boardValues.map((values) => {
      values.status === 0
        ? BoardArray.public.push(values.name, values.board_id)
        : values.status === 1
        ? BoardArray.private.push(values.name, values.board_id)
        : "";
    });
  };
  filterBoardType();
  React.useEffect(() => {}, [boardValues]);

  const handleBoardDeleteApi = (board_id) => {
    if (settingBoard_id === null) {
      alert("Please Select board First");
    } else {
      const result = confirm(
        "You are about to delete this Board, Do You sure ?"
      );
      if (result) {
        fetch("http://localhost:8000/api/boards/delete", {
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
  };

  const DrawerList = (
    <Box sx={{ background: "white" }} role="presentation">
      {/* //onClick={toggleDrawer(false)} */}
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
              <ListItem key={i} disablePadding>
                <ListItemButton
                  ref={handleButtonRef}
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
                    console.log("something went worng")
                  )}
                  <IconButton
                    onClick={() =>
                      handleBoardDeleteApi(BoardArray?.public[i + 1], "public")
                    }
                  >
                    <DeleteOutlineIcon />
                  </IconButton>
                </ListItemButton>
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
              <ListItem key={i} disablePadding>
                <ListItemButton
                  onClick={() =>
                    handleBoardClick(BoardArray.private[i + 1], "private")
                  }
                >
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <MailIcon /> : <InboxIcon />} */}
                    <SpaceDashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} color="green" />
                  {settingBoard_id === BoardArray.private[i + 1] ? (
                    <CheckIcon />
                  ) : (
                    ""
                  )}
                </ListItemButton>
                <IconButton
                  onClick={() =>
                    handleBoardDeleteApi(BoardArray.private[i + 1], "private")
                  }
                >
                  <DeleteOutlineIcon />
                </IconButton>
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
      </Drawer>
    </MeunAppWrapper>
  );
};
export const DrawerMenu = React.memo(DrawerMenus);
