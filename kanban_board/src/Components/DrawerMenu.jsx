import * as React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
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

const DrawerMenus = ({ handleBoardClick }) => {
  const BoardArray = { public: [], private: [] };

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

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
  console.log(BoardArray);
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
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
          <IconButton onClick={() => handleCreatePublicBoard()}>
            <AddIcon />
          </IconButton>
        </div>
        <Divider />
        {BoardArray?.public?.map((text, i) => {
          if (typeof text === "string") {
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() =>
                    handleBoardClick(BoardArray.public[i + 1], "public")
                  }
                >
                  <ListItemIcon>
                    <SpaceDashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
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
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>

        <Divider />

        {BoardArray.private?.map((text, i) => {
          if (typeof text === "string") {
            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() =>
                    handleBoardClick(BoardArray.private[i + 1], "private")
                  }
                >
                  <ListItemIcon>
                    {/* {index % 2 === 0 ? <MailIcon /> : <InboxIcon />} */}
                    <SpaceDashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon style={{ color: "black" }} />
      </Button>
      <>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </>
    </>
  );
};
export const DrawerMenu = React.memo(DrawerMenus);
