// import { Homepage } from "./pages/Homepage";

import { CreateModal } from "./Components/CreateModal";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuAppBar } from "./Components/MenuAppBar";
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
import { Index } from "./pages/Calender/Index";
import { Loginpage } from "./pages/loginpage/Loginpage";
import { Signuppage } from "./pages/signuppage/Signuppage";
import { Hompage } from "./pages/homepage/Hompage";
import { Backdrop_Provider } from "./context/BackdropContext";
import SimpleBackdrop from "./Components/SimpleBackdrop";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import Profilepage from "./pages/profilepage";
import apiUrl from "./utils/urls";
const Apps = () => {
  // eslint-disable-next-line no-undef
  const [showBackdrop, setShowBackdrop] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    message: "",
  });
  const [isDropped, setIsDropped] = useState(false);
  const [draggable_id, setDraggable_id] = useState(null);
  const [droppable_Position_id, setDroppable_Position_id] = useState(null);
  const [open, setOpen] = useState({
    boolean: false,
    list_type: "",
    column_id: "",
  });

  const [openFormDialogBoard, setOpenFormDialogBoard] = React.useState({
    bool: false,
    board_Type: "",
    board_name: "",
  });
  const [settingBoard_id, setSettingBoard_id] = React.useState(
    localStorage.getItem("Previous_board_id") &&
      parseInt(localStorage.getItem("Previous_board_id") || null)
  );
  const [reRender, setReRender] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(false);
  const [board, setBoard] = useState([]);
  useEffect(() => {
    const fetchBoard = async () => {
      const creator_id = JSON.parse(localStorage.getItem("creator_id"));
      const fetchBoardResponse = await fetch(apiUrl.getBoard, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          creator_id: creator_id,
        }),
      });
      const fetchBoardJson = await fetchBoardResponse.json();

      setBoard(fetchBoardJson.data);
    };

    fetchBoard();
  }, [reRender]);

  const handleBoardClick = (board_id) => {
    setSettingBoard_id(board_id);
    localStorage.setItem("Previous_board_id", board_id);
  };

  const handleCreateBoard = (board_Type) => {
    setOpenFormDialogBoard((prev) => {
      return { ...prev, bool: true, board_Type: board_Type };
    });
  };

  const handleCreateBoardApi = (e) => {
    const authToken = localStorage.getItem("authToken");
    e.preventDefault();
    fetch(apiUrl.createBoard, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        board_name: openFormDialogBoard.board_name,
        board_Type: openFormDialogBoard.board_Type,
        creator_id: authToken,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setSettingBoard_id(data.latest_board_id);
          setTimeout(() => {
            setReRender(!reRender);
          }, [2000]);
        }
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
    }
  };

  return (
    <>
      <ThemeProvider theme={switchTheme ? darkTheme : whiteTheme}>
        <Paper>
          <Backdrop_Provider value={[showBackdrop, setShowBackdrop]}>
            <Router>
              <SimpleBackdrop />
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
                  setSettingBoard_id={setSettingBoard_id}
                  settingBoard_id={settingBoard_id}
                  setReRender={setReRender}
                  reRender={reRender}
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
                  path="/boards/:type/:boardName"
                  element={
                    <ProtectedRoute>
                      <BoardProvider value={board}>
                        <Board_idProvider
                          value={
                            settingBoard_id ||
                            localStorage.getItem("Previous_board_id")
                          }
                        >
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
                                <IsDropped_Provider
                                  value={[isDropped, setIsDropped]}
                                >
                                  <SnackBarProvider value={[state, setState]}>
                                    <Newhomepage
                                      reRender={reRender}
                                      setReRender={setReRender}
                                      open={open}
                                      setOpen={setOpen}
                                      settingBoard_id={settingBoard_id}
                                    />
                                  </SnackBarProvider>
                                </IsDropped_Provider>
                              </Droppable_Provider>
                            </Draggable_Provider>
                          </DndContext>
                        </Board_idProvider>
                      </BoardProvider>
                    </ProtectedRoute>
                  }
                />

                <Route exact path="/" element={<Hompage />} />
                <Route exact path="/calender" element={<Index />}></Route>
                <Route
                  exact
                  path="/login"
                  element={<Loginpage board={board} />}
                />
                <Route exact path="/signup" element={<Signuppage />} />
                <Route exact path="/profile" element={<Profilepage />} />
              </Routes>
            </Router>
          </Backdrop_Provider>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export const App = React.memo(Apps);
