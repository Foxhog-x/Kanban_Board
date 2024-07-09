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
import Typography from "@mui/material/Typography";
import { useDroppable } from "@dnd-kit/core";

const Listcolumns = ({
  list_column_id,
  setReRender,
  id,
  reRender,
  handleCardClick,
  setOpen,
  cards,
  list_column_name,
}) => {
  const handleCardDelete = (card_board_id) => {

    fetch("https://agile-boardnew.vercel.app/api/cards/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        card_id: card_board_id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success === true) {
          setReRender(!reRender);
        }
      });
  };
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
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: cards.position,
  });

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
              <Typography m={1}>{list_column_name}</Typography>
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
            </div>
          </Box>
        </div>

        <>
          <div className="todo" ref={setNodeRef}>
            {cards &&
              cards?.map((cardValue, i) => {
                // console.log(cardValue, "cardValue");
                if (cardValue.column_id === list_column_id) {
                  // eslint-disable-next-line react/jsx-key
                  return (
                    // eslint-disable-next-line react/jsx-key
                    <div key={i} className="card_scrollable_todo">
                      <CardProvider
                        key={cardValue.card_card_id}
                        value={cardValue}
                      >
                        <Cards
                          key={cardValue?.card_id}
                          id={cardValue?.card_id}
                          reRender={reRender}
                          setReRender={setReRender}
                          handleCardClick={handleCardClick}
                          handleCardDelete={handleCardDelete}
                        />
                      </CardProvider>
                    </div>
                  );
                }
              })}
          </div>
        </>
      </div>
    </>
  );
};

export const Listcolumn = React.memo(Listcolumns);
