import { useEffect, useState } from "react";
import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
import { CardInfoModel } from "../Components/CardInfoModel";
import { CreateListModel } from "../Components/CreateListModel";

// eslint-disable-next-line react/prop-types
export const Newhomepage = ({ open, setOpen }) => {
  const [list_Col, setList_Col] = useState([]);
  const [cards, setCards] = useState([]);
  const [basicModelOpen, setBasicModelOpen] = useState(false);
  const [showCardInfoInModel, setShowCardInfoModel] = useState([]);
  const [createListModel, setCreateListModel] = useState(false);

  const fetchList_Col = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/list_column", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const convertingToJson = await list_Col_Data.json();
    setList_Col(convertingToJson);
  };
  useEffect(() => {
    fetchList_Col();
  }, []);

  const board_id = list_Col[0]?.board_id;
  console.log(list_Col);
  const fetchCards = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const convertingToJson = await list_Col_Data.json();
    setCards(convertingToJson);
    console.log(convertingToJson, "cards");
  };
  useEffect(() => {
    fetchCards();
  }, []);

  const handleCardClick = (cardInfovalue) => {
    console.log(cardInfovalue, "value of card in model");
    setBasicModelOpen(!basicModelOpen);
    setShowCardInfoModel(cardInfovalue);
  };

  return (
    <>
      <CreateListModel
        board_id={board_id}
        createListModel={createListModel}
        setCreateListModel={setCreateListModel}
      />
      <CardInfoModel
        basicModelOpen={basicModelOpen}
        setBasicModelOpen={setBasicModelOpen}
        showCardInfoInModel={showCardInfoInModel}
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
            {list_Col?.map((value) => {
              // eslint-disable-next-line react/jsx-key
              return (
                // eslint-disable-next-line react/jsx-key
                <Listcolumn
                  handleCardClick={handleCardClick}
                  setBasicModelOpen={setBasicModelOpen}
                  basicModelOpen={basicModelOpen}
                  setOpen={setOpen}
                  open={open}
                  key={value.name}
                  cards={cards}
                  list_column_id={value.column_id}
                  list_column_name={value.name}
                  board_id={board_id || 1}
                />
              );
            })}
          </div>
        </div>
        {/* <Listcolumn value={value} setOpen={setOpen} /> */}
      </div>
    </>
  );
};
