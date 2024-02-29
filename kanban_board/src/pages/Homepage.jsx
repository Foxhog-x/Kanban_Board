import { BlankCard } from "../Components/BlankCard";
import { Cards } from "../Components/Cards";
import { FlatAddIcon } from "../Components/FlatAddIcon";
import { MenuAppBar } from "../Components/MenuAppBar";

import "./homepage.css";

// eslint-disable-next-line react/prop-types
export const Homepage = ({ setOpen }) => {
  return (
    <>
      <div>
        <MenuAppBar />
      </div>
      <div className="main_container">
        <div className="todo">
          <div className="todo_create_Button">
            <h2>Todo</h2>
            <button
              className="createFlatIconBtn_todo"
              onClick={() =>
                setOpen((prev) => {
                  return { ...prev, boolean: true, list_type: "todo" };
                })
              }
            >
              <FlatAddIcon />
            </button>
          </div>
          <Cards />
        </div>
        <div className="doing">
          <div className="todo_create_Button">
            <h2>Doing</h2>
            <button
              className="createFlatIconBtn_doing"
              onClick={() =>
                setOpen((prev) => {
                  return { ...prev, boolean: true, list_type: "doing" };
                })
              }
              // onClick={() => handleCreateTask("doing")}
            >
              <FlatAddIcon />
            </button>
          </div>
          <Cards />
          <Cards />
        </div>
        <div className="review">
          <div className="todo_create_Button">
            <h2>Review</h2>
            <button
              className="createFlatIconBtn_review"
              onClick={() =>
                setOpen((prev) => {
                  return { ...prev, boolean: true, list_type: "review" };
                })
              }
              // onClick={() => handleCreateTask("review")}
            >
              <FlatAddIcon />
            </button>
          </div>

          <Cards />
        </div>
        <div className="done">
          <div className="todo_create_Button">
            <h2>Done</h2>
            <button
              className="createFlatIconBtn_done"
              onClick={() =>
                setOpen((prev) => {
                  return { ...prev, boolean: true, list_type: "done" };
                })
              }
              // onClick={() => handleCreateTask("done")}
            >
              <FlatAddIcon />
            </button>
          </div>
          <Cards />
        </div>
      </div>
    </>
  );
};
