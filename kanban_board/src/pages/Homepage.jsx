import { useEffect, useState } from "react";
import { Cards } from "../Components/Cards";
import { FlatAddIcon } from "../Components/FlatAddIcon";
import { MenuAppBar } from "../Components/MenuAppBar";

import "./homepage.css";

// eslint-disable-next-line react/prop-types
export const Homepage = ({ setOpen }) => {
  const [apiCardData, setApiCardData] = useState([]);
  const fetchCardApi = async () => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(
        "http://localhost:8000/api/boards/list_type/cards"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      setApiCardData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchCardApi = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/boards/list_type/cards",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        setApiCardData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCardApi();
  }, []);

  console.log(apiCardData);
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
          {apiCardData.map((value, index) => {
            return <Cards key={index} />;
          })}
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
              <button onClick={() => fetchCardApi()}>clickhere</button>
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
