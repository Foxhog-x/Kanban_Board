import { useRef, useState } from "react";

export const useCreateList = (reRender, setReRender, createListPostApi) => {
  const [createListModel, setCreateListModel] = useState(false);
  const addListTextFieldRef = useRef(null);

  const handleCreateListPostapi = (e) => {
    e.preventDefault;
    if (addListTextFieldRef.current.value === "") {
      alert("Please fill something");
    } else if (addListTextFieldRef.current.value.length >= 18) {
      alert("please enter less than 18 characters");
    } else {
      fetch("http://localhost:8000/api/list_column/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          createList_Obj: createListPostApi,
        }),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => console.log(data, "this is data i am getting"));
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
