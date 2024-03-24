/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import { FlatAddIcon } from "../Components/FlatAddIcon";
import IconButton from "@mui/material/IconButton";

import "../pages/newpage.css";
import "../App.css";
import { Cards } from "./Cards";
import { Box } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MuiMenu } from "./MuiMenu";
import Paper from "@mui/material/Paper";
// eslint-disable-next-line react/prop-types
export const Listcolumn = ({
  list_column_id,
  setReRender,
  reRender,
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
    <>
      <div className="main_container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <div className="list_column_names">
              <div>
                <h2 style={{ marginLeft: "15px", marginRight: "15px" }}>
                  {list_column_name}
                </h2>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginRight: 5,
                }}
              >
                <IconButton
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
                  <AddCircleOutlineIcon />
                </IconButton>
                <MuiMenu
                  setReRender={setReRender}
                  reRender={reRender}
                  list_column_id={list_column_id}
                />
              </div>
              {/* <button
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
              
              </button> */}
            </div>
          </Box>
        </div>

        <div className="todo">
          <>
            <div className="overflow">
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
            </div>
          </>
        </div>
      </div>
    </>
  );
};
