import { useContext, useRef, useState } from "react";
import { BoardContext } from "../context/BoardContext";
import apiUrl from "../utils/urls";

export const useCreateList = (
  reRender,
  setReRender,
  createListPostApi,
  settingBoard_id
) => {
  const [createListModel, setCreateListModel] = useState(false);
  const addListTextFieldRef = useRef(null);
  const boards = useContext(BoardContext);

  const handleCreateListPostapi = (e) => {
    if (boards === undefined) alert("board_id is empty");
    if (boards === undefined || boards.length === 0) {
      console.log("alert");
      alert("Please Create a atleast one board");
    } else if (settingBoard_id === null) {
      alert("You did not select any Board ");
    }
    e.preventDefault;
    if (addListTextFieldRef.current.value === "") {
      alert("Please fill something");
    } else if (addListTextFieldRef.current.value.length >= 18) {
      alert("please enter less than 18 characters");
    } else {
      fetch(apiUrl.createList, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createList_Obj: createListPostApi,
        }),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => console.log(data, "create list response"));
    }
    setTimeout(() => {
      setReRender(!reRender);
    }, 300);
    clearForm();
    setCreateListModel(false);
  };

  const clearForm = () => {
    addListTextFieldRef.current.value = "";
  };

  return {
    handleCreateListPostapi,
    createListModel,
    setCreateListModel,
    addListTextFieldRef,
  };
};
