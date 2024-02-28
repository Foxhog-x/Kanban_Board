import "./App.css";
import { Cards } from "./Components/Cards";
import { FlatAddIcon } from "./Components/FlatAddIcon";
// import { DrawerMenu } from "./Components/DrawerMenu";
import { MenuAppBar } from "./Components/MenuAppBar";

function App() {
  return (
    <>
      <div>
        <MenuAppBar />
      </div>

      <div className="main_container">
        <div className="todo">
          <div className="todo_create_Button">
            <h2>TODO</h2>
            <FlatAddIcon />
          </div>
          <Cards />
        </div>
        <div className="doing">
          <div className="todo_create_Button">
            <h2>Doing</h2>
            <FlatAddIcon />
          </div>
          <Cards />
          <Cards />
        </div>
        <div className="review">
          <div className="todo_create_Button">
            <h2>Review</h2>
            <FlatAddIcon />
          </div>

          <Cards />
        </div>
        <div className="done">
          <div className="todo_create_Button">
            <h2>Done</h2>
            <FlatAddIcon />
          </div>

          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
