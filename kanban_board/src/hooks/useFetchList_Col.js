import { useEffect, useState } from "react";

export const useFetchList_Col = (reRender) => {
  const [list_Col, setList_Col] = useState([]);

  const [createListPostApi, setCreateListPostApi] = useState({
    name: "",
    board_id: "",
  });

  const fetchList_Col = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/list_column", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    const list_Col_Json = await list_Col_Data.json();

    setList_Col(list_Col_Json);

    if (list_Col_Json.length == 0) {
      setCreateListPostApi({
        name: "",
        board_id: 1,
      });
    }
    setCreateListPostApi({
      name: "",
      board_id: list_Col_Json[0]?.board_id,
    });
  };
  console.log(createListPostApi, "create list api");
  useEffect(() => {
    fetchList_Col();
  }, [reRender]);

  return [list_Col, createListPostApi, setCreateListPostApi];
};
