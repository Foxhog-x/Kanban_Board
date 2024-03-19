// import { Homepage } from "./pages/Homepage";

import { CreateModal } from "./Components/CreateModal";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MenuAppBar } from "./Components/MenuAppBar";
import { SignInpage } from "./pages/SignInpage";
import { Signuppage } from "./pages/Signuppage";
import { Newhomepage } from "./pages/Newhomepage";

function App() {
  // eslint-disable-next-line no-undef
  const [open, setOpen] = useState({
    boolean: false,
    list_type: "",
    column_id: "",
  });
  console.log(open);
  return (
    <>
      <Router>
        <MenuAppBar />
        <CreateModal open={open} setOpen={setOpen} />
        <Routes>
          {/* <Route exact path="/" element={<Homepage setOpen={setOpen} />} /> */}
          <Route
            exact
            path="/"
            element={<Newhomepage open={open} setOpen={setOpen} />}
          />
          <Route exact path="/signup" element={<Signuppage />}></Route>
          <Route exact path="/login" element={<SignInpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
