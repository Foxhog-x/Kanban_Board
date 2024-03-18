/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import { FlatAddIcon } from "../Components/FlatAddIcon";
import "../pages/newpage.css";
import "../App.css";
import { Cards } from "./Cards";

// eslint-disable-next-line react/prop-types
export const Listcolumn = ({
  list_column_id,
  handleCardClick,
  setOpen,
  cards,
  list_column_name,
}) => {
  // useEffect(() => {
  //   const fetchCardApi = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8000/api/boards/list_type/cards",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await response.json();

  //       setApiCardData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchCardApi();
  // }, []);

  return (
    <div className="main_container">
      <div className="todo">
        <div className="create_Button"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h2> {list_column_name}</h2>
          <button
            className="createFlatIconBtn"
            onClick={() =>
              setOpen((prev) => {
                return {
                  ...prev,
                  boolean: true,
                  list_type: list_column_name,
                  column_id: list_column_id,
                };
              })
            }
          >
            <FlatAddIcon />
          </button>
        </div>
        <>
          {cards.map((cardValue) => {
            if (cardValue.column_id === list_column_id) {
              // eslint-disable-next-line react/jsx-key
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="card_scrollable_todo">
                  <Cards
                    cardValue={cardValue}
                    handleCardClick={handleCardClick}
                  />
                </div>
              );
            }
          })}
        </>
      </div>
    </div>
  );
};
