import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
import { CreateListModel } from "../Components/CreateListModel";
import { Rightsidecardinfo } from "../Components/Rightsidecardinfo";
import Button from "@mui/material/Button";
import { useFetchList_Col } from "../hooks/useFetchList_Col";
import { useFetchCards } from "../hooks/useFetchCards";
import { useCreateList } from "../hooks/useCreateList";
import { useHandleClick } from "../hooks/useHandleClick";

// eslint-disable-next-line react/prop-types
export const Newhomepage = ({ open, setOpen, reRender, setReRender }) => {
  // const [list_Col, setList_Col] = useState([]);
  // const [cards, setCards] = useState([]);
  // const [createListModel, setCreateListModel] = useState(false);
  // const [infoRightCard, setInfoRightCard] = useState([]);
  // const addListTextFieldRef = useRef(null);

  // const [state, setState] = React.useState({
  //   right: false,
  // });
  // const [createListPostApi, setCreateListPostApi] = useState({
  //   name: "",
  //   board_id: "",
  // });

  // const fetchList_Col = async () => {
  //   const list_Col_Data = await fetch("http://localhost:8000/api/list_column", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const convertingToJson = await list_Col_Data.json();

  //   setList_Col(convertingToJson);
  //   if (convertingToJson.length == 0) {
  //     setCreateListPostApi({
  //       name: "",
  //       board_id: 1,
  //     });
  //   }
  //   setCreateListPostApi({
  //     name: "",
  //     board_id: convertingToJson[0]?.board_id,
  //   });
  // };

  // console.log(createListPostApi, "create list api");
  // useEffect(() => {
  //   fetchList_Col();
  // }, [reRender]);

  const [list_Col, createListPostApi, setCreateListPostApi] =
    useFetchList_Col(reRender);
  // console.log(list_Col, "ksutsdkjfskfdhksdfkshdf");

  const [cards] = useFetchCards(reRender);
  // console.log(cards, "all the cards are fetcg");
  // const fetchCards = async () => {
  //   const list_Col_Data = await fetch("http://localhost:8000/api/cards", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //   });
  //   const convertingToJson = await list_Col_Data.json();
  //   setCards(convertingToJson);
  // };

  // useEffect(() => {
  //   fetchCards();
  // }, [reRender]);

  const { handleCardClick, infoRightCard, state, setState } = useHandleClick();

  // const handleCardClick = (cardInfovalue) => {
  //   setState((prev) => {
  //     return { ...prev, right: true };
  //   });
  //   setInfoRightCard(cardInfovalue);
  //   console.log("its works");
  // };

  const {
    handleCreateListPostapi,
    addListTextFieldRef,
    createListModel,
    setCreateListModel,
  } = useCreateList(reRender, setReRender, createListPostApi);

  // const handleCreateListPostapi = (e) => {
  //   e.preventDefault;
  //   console.log(addListTextFieldRef.current.value.length, "refess value");
  //   if (addListTextFieldRef.current.value === "") {
  //     alert("Please fill something");
  //   } else if (addListTextFieldRef.current.value.length >= 18) {
  //     alert("please enter less than 18 characters");
  //   } else {
  //     fetch("http://localhost:8000/api/list_column/create", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         createList_Obj: createListPostApi,
  //       }),
  //     }).then((response) => {
  //       console.log(response.json(), "consoling json response");
  //     });
  //   }
  //   setTimeout(() => {
  //     setReRender(!reRender);
  //   }, 300);
  //   clearForm();
  //   setCreateListModel(false);
  // };

  // const clearForm = () => {
  //   addListTextFieldRef.current.value = "";
  // };

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
                    handleCardClick={handleCardClick}
                    setOpen={setOpen}
                    open={open}
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
