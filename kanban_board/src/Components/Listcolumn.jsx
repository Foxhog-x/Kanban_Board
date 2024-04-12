/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import IconButton from "@mui/material/IconButton";

import "../pages/newpage.css";
import "../App.css";
import { Cards } from "./Cards";
import { Box } from "@mui/system";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { MuiMenu } from "./MuiMenu";
import { CardProvider } from "../context/CardContext";
import React from "react";
// eslint-disable-next-line react/prop-types

const Listcolumns = ({
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
                <p
                  style={{
                    marginLeft: "15px",
                    marginRight: "15px",
                    overflow: "hidden",
                  }}
                >
                  {list_column_name}
                </p>
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
                // console.log(cardValue, "cardValue");
                if (cardValue.column_id === list_column_id) {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div
                      key={cardValue.card_card_id}
                      className="card_scrollable_todo"
                    >
                      <CardProvider value={cardValue}>
                        <Cards
                          reRender={reRender}
                          setReRender={setReRender}
                          handleCardClick={handleCardClick}
                        />
                      </CardProvider>
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

export const Listcolumn = React.memo(Listcolumns);
