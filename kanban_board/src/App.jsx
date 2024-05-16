// import { Homepage } from "./pages/Homepage";

import { CreateModal } from "./Components/CreateModal";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuAppBar } from "./Components/MenuAppBar";
import { SignInpage } from "./pages/SignInpage";
import { Signuppage } from "./pages/Signuppage";
import { Newhomepage } from "./pages/Newhomepage";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { darkTheme, whiteTheme } from "./utils/themeMode";
import { BoardProvider } from "./context/BoardContext";
import React from "react";
import { Board_idProvider } from "./context/Board_idContext";
import FormDialog from "./Components/FormDialog";
import { DndContext } from "@dnd-kit/core";
import { Draggable_Provider } from "./context/Draggable_Context";
import { Droppable_Provider } from "./context/Droppable_Context";
import { IsDropped_Provider } from "./context/IsDropped_Context";
import { SnackBarProvider } from "./context/SnackBarContext";

const Apps = () => {
  // eslint-disable-next-line no-undef
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
  });
  const [isDropped, setIsDropped] = useState(false);
  const [draggable_id, setDraggable_id] = useState(null);
  const [droppable_Position_id, setDroppable_Position_id] = useState(null);
  const [open, setOpen] = useState({
    boolean: false,
    list_type: "",
    column_id: "",
  });

  const [loginData, setLoginData] = useState([]);
  const [openFormDialogBoard, setOpenFormDialogBoard] = React.useState({
    bool: false,
    board_Type: "",
    board_name: "",
  });
  const [settingBoard_id, setSettingBoard_id] = React.useState(1);
  const [reRender, setReRender] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const fetchBoard = async () => {
      const fetchBoardResponse = await fetch(
        "http://localhost:8000/api/boards",
        {
          method: "POST",
          headers: { "Content-Type": "application-json" },
        }
      );
      const fetchBoardJson = await fetchBoardResponse.json();
      console.log(fetchBoardJson, "this fetch board json");
      setBoard(fetchBoardJson.results);
    };

    fetchBoard();
  }, []);
  console.log(board, "this is another board values");

  const handleBoardClick = (board_id) => {
    setSettingBoard_id(board_id);
  };
  const handleCreateBoard = (board_Type) => {
    setOpenFormDialogBoard((prev) => {
      return { ...prev, bool: true, board_Type: board_Type };
    });
  };

  const handleCreateBoardApi = (e) => {
    const authToken = localStorage.getItem("authToken");
    e.preventDefault();
    fetch("http://localhost:8000/api/boards/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        board_name: openFormDialogBoard.board_name,
        board_Type: openFormDialogBoard.board_Type,
        creator_id: authToken,
      }),
    });

    setOpenFormDialogBoard((prev) => {
      return { ...prev, bool: false };
    });
  };
  const handleDragFunction = (event) => {
    const { active, over } = event;
    if (active.data.current !== over.id) {
      const item_id = active.id;
      setDraggable_id(item_id);
      const droppable_item_id = over.id;
      setDroppable_Position_id(droppable_item_id);
      setIsDropped(true);
      console.log(isDropped, "dropped boolean");
    }
  };

  return (
    <>
      <ThemeProvider theme={switchTheme ? darkTheme : whiteTheme}>
        <Paper>
          <Router>
            <FormDialog
              openFormDialogBoard={openFormDialogBoard}
              setOpenFormDialogBoard={setOpenFormDialogBoard}
              handleCreateBoardApi={handleCreateBoardApi}
            />
            <BoardProvider value={board && board}>
              <MenuAppBar
                setSwitchTheme={setSwitchTheme}
                handleBoardClick={handleBoardClick}
                handleCreateBoard={handleCreateBoard}
                settingBoard_id={settingBoard_id}
              />
            </BoardProvider>

            <CreateModal
              reRender={reRender}
              setReRender={setReRender}
              open={open}
              setOpen={setOpen}
            />
            <Routes>
              {/* <Route exact path="/" element={<Homepage setOpen={setOpen} />} /> */}
              <Route
                exact
                path="/"
                element={
                  <Board_idProvider value={settingBoard_id}>
                    <DndContext onDragEnd={handleDragFunction}>
                      <Draggable_Provider
                        value={[draggable_id, setDraggable_id]}
                      >
                        <Droppable_Provider
                          value={[
                            droppable_Position_id,
                            setDroppable_Position_id,
                          ]}
                        >
                          <IsDropped_Provider value={[isDropped, setIsDropped]}>
                            <SnackBarProvider value={[state, setState]}>
                              <Newhomepage
                                reRender={reRender}
                                setReRender={setReRender}
                                open={open}
                                setOpen={setOpen}
                              />
                            </SnackBarProvider>
                          </IsDropped_Provider>
                        </Droppable_Provider>
                      </Draggable_Provider>
                    </DndContext>
                  </Board_idProvider>
                }
              />
              <Route exact path="/signup" element={<Signuppage />}></Route>
              <Route
                exact
                path="/login"
                element={
                  <SignInpage
                    loginData={loginData}
                    setLoginData={setLoginData}
                  />
                }
              ></Route>
            </Routes>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export const App = React.memo(Apps);
