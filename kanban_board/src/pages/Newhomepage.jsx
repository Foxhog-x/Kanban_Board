import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
import { CreateListModel } from "../Components/CreateListModel";
import { Rightsidecardinfo } from "../Components/Rightsidecardinfo";
import Button from "@mui/material/Button";
import { useFetchList_Col } from "../hooks/useFetchList_Col";
import { useFetchCards } from "../hooks/useFetchCards";
import { useCreateList } from "../hooks/useCreateList";
import { useHandleClick } from "../hooks/useHandleClick";

import { useUpdateCards } from "../hooks/useUpdateCards.js";
import PositionedSnackbar from "../Components/PositionedSnackbar.jsx";
// eslint-disable-next-line react/prop-types
export const Newhomepage = ({
  open,
  setOpen,
  reRender,
  setReRender,
  settingBoard_id,
}) => {
  const [list_Col, createListPostApi, setCreateListPostApi] =
    useFetchList_Col(reRender);

  const [cards, setCards] = useFetchCards(reRender);

  const { handleCardClick, infoRightCard, state, setState } = useHandleClick();

  useUpdateCards(cards, setCards);
  const {
    handleCreateListPostapi,
    addListTextFieldRef,
    createListModel,
    setCreateListModel,
  } = useCreateList(reRender, setReRender, createListPostApi, settingBoard_id);

  return (
    <>
      <PositionedSnackbar />
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
        <Button
          variant="contained"
          onClick={() => setCreateListModel(!createListModel)}
        >
          Create List
        </Button>
      </div>
      <div
        className="background_color_main_conatin"
        style={{
          height: list_Col.length === 0 ? "88vh" : "",
          display: list_Col.length === 0 ? "grid" : "",
          placeContent: "center",
        }}
      >
        <div className="main_container">
          <div className="horizontal_grid">
            {list_Col.length !== 0 ? (
              list_Col?.map((value, i) => {
                // eslint-disable-next-line react/jsx-key
                return (
                  // eslint-disable-next-line react/jsx-key
                  <Listcolumn
                    key={i}
                    id={value?.column_id}
                    handleCardClick={handleCardClick}
                    setOpen={setOpen}
                    open={open}
                    cards={cards}
                    list_column_id={value.column_id}
                    list_column_name={value.name}
                    setReRender={setReRender}
                    reRender={reRender}
                    setCards={setCards}
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
