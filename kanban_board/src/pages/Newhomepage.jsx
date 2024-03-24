import { useEffect, useRef, useState } from "react";
import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
import { CreateListModel } from "../Components/CreateListModel";
import Paper from "@mui/material/Paper";
import React from "react";
import Rightsidecardinfo from "../Components/Rightsidecardinfo";
import { grid, height } from "@mui/system";

// eslint-disable-next-line react/prop-types
export const Newhomepage = ({ open, setOpen, reRender, setReRender }) => {
  const [list_Col, setList_Col] = useState([]);
  const [cards, setCards] = useState([]);
  const [createListModel, setCreateListModel] = useState(false);
  const [infoRightCard, setInfoRightCard] = useState([]);
  const addListTextFieldRef = useRef(null);
  const [state, setState] = React.useState({
    right: false,
  });
  const [createListPostApi, setCreateListPostApi] = useState({
    name: "",
    board_id: "",
  });
  const fetchList_Col = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/list_column", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const convertingToJson = await list_Col_Data.json();

    setList_Col(convertingToJson);
    if (convertingToJson.length == 0) {
      setCreateListPostApi({
        name: "",
        board_id: 1,
      });
    }
    setCreateListPostApi({
      name: "",
      board_id: convertingToJson[0].board_id,
    });
  };

  console.log(createListPostApi, "create list api");
  useEffect(() => {
    fetchList_Col();
  }, [reRender]);

  const fetchCards = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const convertingToJson = await list_Col_Data.json();
    setCards(convertingToJson);
  };
  useEffect(() => {
    fetchCards();
  }, [reRender]);

  const handleCardClick = (cardInfovalue) => {
    setState((prev) => {
      return { ...prev, right: true };
    });
    setInfoRightCard(cardInfovalue);
    console.log("its works");
  };

  const handleCreateListPostapi = (e) => {
    e.preventDefault;
    if (addListTextFieldRef.current.value === "") {
      alert("Please fill something");
    } else {
      fetch("http://localhost:8000/api/list_column/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createList_Obj: createListPostApi,
        }),
      });
    }
    clearForm();
    setCreateListModel(false);

    setTimeout(() => {
      setReRender(!reRender);
    }, 300);
  };

  const clearForm = () => {
    addListTextFieldRef.current.value = "";
  };
  return (
    <>
      <CreateListModel
        createListModel={createListModel}
        setCreateListModel={setCreateListModel}
        setCreateListPostApi={setCreateListPostApi}
        handleCreateListPostapi={handleCreateListPostapi}
        boardId={list_Col?.[0]?.board_id}
        addListTextFieldRef={addListTextFieldRef}
      />
      <Rightsidecardinfo
        infoRightCard={infoRightCard}
        state={state}
        setState={setState}
      />
      <div
        className="createlist_css"
        style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "center",
          padding: "14px",
        }}
      >
        {" "}
        <button onClick={() => setCreateListModel(!createListModel)}>
          Create List
        </button>
      </div>
      <div
        className="background_color_main_conatin"
        style={{ overflowX: "auto" }}
      >
        <div className="main_container">
          <div className="horizontal_grid">
            {list_Col.length !== 0 ? (
              list_Col?.map((value) => {
                // eslint-disable-next-line react/jsx-key
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Listcolumn
                    handleCardClick={handleCardClick}
                    setOpen={setOpen}
                    open={open}
                    key={value.name}
                    cards={cards}
                    list_column_id={value.column_id}
                    list_column_name={value.name}
                    setReRender={setReRender}
                    reRender={reRender}
                  />
                );
              })
            ) : (
              <div className="horizontal_grid">
                <div>There is No list to show</div>{" "}
              </div>
            )}
          </div>
        </div>
        {/* <Listcolumn value={value} setOpen={setOpen} /> */}
      </div>
    </>
  );
};
