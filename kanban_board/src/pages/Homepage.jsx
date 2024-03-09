import { useEffect, useState } from "react";
import { Cards } from "../Components/Cards";
import { FlatAddIcon } from "../Components/FlatAddIcon";

import "./homepage.css";

// eslint-disable-next-line react/prop-types
export const Homepage = ({ setOpen }) => {
  const [apiCardData, setApiCardData] = useState([]);

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
  // console.log(apiCardData);
  let todoData = apiCardData.filter((value) => {
    return value.list_id === "todo";
  });
  // console.log(todoData);
  let doingData = apiCardData.filter((value) => {
    return value.list_id === "doing";
  });

  let reviewData = apiCardData.filter((value) => {
    return value.list_id === "review";
  });

  let doneData = apiCardData.filter((value) => {
    return value.list_id === "done";
  });

  const handleCardClick = () => {
    console.log("its works");
  };
  return (
    <>
      <div className="main_container">
        <div className="todo">
          <div className="create_Button">
            <h2>Todo</h2>
            <button
              className="createFlatIconBtn"
              onClick={() =>
                setOpen((prev) => {
                  return { ...prev, boolean: true, list_type: "todo" };
                })
              }
            >
              <FlatAddIcon />
            </button>
          </div>
          <div className="card_scrollable_todo">
            {todoData?.map((value, index) => {
              return (
                <Cards
                  handleCardClick={handleCardClick}
                  card_id={value.card_id}
                  task_title={value.task_name}
                  description={value.description}
                  create_on={value.create_date}
                  department={value.department}
                  key={index}
                />
              );
            })}
          </div>
        </div>
        <div className="doing">
          <div className="create_Button">
            <h2>Doing</h2>

            <button
              className="createFlatIconBtn"
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
          <div className="card_scrollable_doing">
            {doingData?.map((value, index) => (
              <Cards
                card_id={value.card_id}
                task_title={value.task_name}
                description={value.description}
                create_on={value.create_date}
                department={value.department}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="review">
          <div className="create_Button">
            <h2>Review</h2>
            <button
              className="createFlatIconBtn"
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
          <div className="card_scrollable_review">
            {reviewData?.map((value, index) => (
              <Cards
                card_id={value.card_id}
                task_title={value.task_name}
                description={value.description}
                create_on={value.create_date}
                department={value.department}
                key={index}
              />
            ))}
          </div>
        </div>
        <div className="done">
          <div className="create_Button">
            <h2>Done</h2>
            <button
              className="createFlatIconBtn"
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
          <div className="card_scrollable_done">
            {doneData?.map((value, index) => (
              <Cards
                card_id={value.card_id}
                task_title={value.task_name}
                description={value.description}
                create_on={value.create_date}
                department={value.department}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
