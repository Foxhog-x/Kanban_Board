// import { Homepage } from "./pages/Homepage";

import { CreateModal } from "./Components/CreateModal";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuAppBar } from "./Components/MenuAppBar";
import { SignInpage } from "./pages/SignInpage";
import { Signuppage } from "./pages/Signuppage";
import { Newhomepage } from "./pages/Newhomepage";
import { ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { darkTheme, whiteTheme } from "./utils/themeMode";

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { ComponentA } from "./Components/ComponentA";

function App() {
  // eslint-disable-next-line no-undef
  const [open, setOpen] = useState({
    boolean: false,
    list_type: "",
    column_id: "",
  });
  const [reRender, setReRender] = useState(false);
  const [switchTheme, setSwitchTheme] = useState(true);

  return (
    <>
      {" "}
      <ThemeProvider theme={switchTheme ? darkTheme : whiteTheme}>
        <Paper>
          <Router>
            <MenuAppBar setSwitchTheme={setSwitchTheme} />

            <CreateModal
              reRender={reRender}
              setReRender={setReRender}
              open={open}
              setOpen={setOpen}
            />
            <Routes>
              {/* <Route exact path="/" element={<Homepage setOpen={setOpen} />} /> */}
              <Route exact path="/context" element={<ComponentA />} />
              <Route
                exact
                path="/"
                element={
                  <Newhomepage
                    reRender={reRender}
                    setReRender={setReRender}
                    open={open}
                    setOpen={setOpen}
                  />
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
}

export default App;
