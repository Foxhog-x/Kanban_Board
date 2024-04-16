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
import { BoardContext, BoardProvider } from "./context/BoardContext";
import React from "react";
import { Board_idProvider } from "./context/Board_idContext";
// import MenuItem from "@mui/material/MenuItem";
// import Typography from "@mui/material/Typography";

const Apps = () => {
  // eslint-disable-next-line no-undef
  const [open, setOpen] = useState({
    boolean: false,
    list_type: "",
    column_id: "",
  });
  const [settingBoard_id, setSettingBoard_id] = React.useState(1);
  const [reRender, setReRender] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(true);
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

      setBoard(fetchBoardJson.results);
    };

    fetchBoard();
  }, []);

  console.log(board);

  const handleBoardClick = (board_id) => {
    setSettingBoard_id(board_id);
  };

  return (
    <>
      {" "}
      <ThemeProvider theme={switchTheme ? darkTheme : whiteTheme}>
        <Paper>
          <Router>
            <BoardProvider value={board && board}>
              <MenuAppBar
                setSwitchTheme={setSwitchTheme}
                handleBoardClick={handleBoardClick}
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
              <Route exact path="/login" element={<SignInpage />}></Route>
            </Routes>
          </Router>
        </Paper>
      </ThemeProvider>
    </>
  );
};

export const App = React.memo(Apps);
