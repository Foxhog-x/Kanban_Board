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

// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";

const Apps = () => {
  // eslint-disable-next-line no-undef
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
  const [switchTheme, setSwitchTheme] = useState(true);
  const [board, setBoard] = useState([]);
  if (localStorage.getItem("authToken") === "undefined") {
    localStorage.setItem("authToken", loginData.authToken);
  }

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

      setBoard(fetchBoardJson.results);
    };

    fetchBoard();
  }, []);
  const authToken = localStorage.getItem("authToken");

  const handleBoardClick = (board_id) => {
    setSettingBoard_id(board_id);
  };
  const handleCreateBoard = (board_Type) => {
    setOpenFormDialogBoard((prev) => {
      return { ...prev, bool: true, board_Type: board_Type };
    });
  };

  const handleCreateBoardApi = (e) => {
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
                    <Newhomepage
                      reRender={reRender}
                      setReRender={setReRender}
                      open={open}
                      setOpen={setOpen}
                    />
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
