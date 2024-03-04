import { Homepage } from "./pages/Homepage";

import { CreateModal } from "./Components/CreateModal";
import { useState } from "react";

function App() {
  // eslint-disable-next-line no-undef
  const [open, setOpen] = useState({ boolean: false, list_type: "" });
  console.log(open);

  return (
    <>
      <Homepage setOpen={setOpen} />
      <CreateModal open={open} setOpen={setOpen} />
    </>
  );
}

export default App;
