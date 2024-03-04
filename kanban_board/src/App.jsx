// import { Homepage } from "./pages/Homepage";

// import { CreateModal } from "./Components/CreateModal";
// import { useState } from "react";
import { useEffect } from "react";
import { MenuAppBar } from "./Components/MenuAppBar";
import { SignInpage } from "./pages/SignInpage";

function App() {
  // eslint-disable-next-line no-undef
  // const [open, setOpen] = useState({ boolean: false, list_type: "" });
  // console.log(open);
  useEffect(() => {});
  return (
    <>
      <MenuAppBar />
      <SignInpage />
      {/* <Homepage setOpen={setOpen} />
      <CreateModal open={open} setOpen={setOpen} /> */}
    </>
  );
}

export default App;
