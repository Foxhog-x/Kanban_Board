import { useContext, useEffect, useState } from "react";

import { Board_idContext } from "../context/Board_idContext";
import apiUrl from "../utils/urls";

export const useFetchList_Col = (reRender) => {
  const [list_Col, setList_Col] = useState([]);

  const [createListPostApi, setCreateListPostApi] = useState({
    name: "",
    board_id: "",
  });
  const board_id = useContext(Board_idContext);
  console.log(board_id, "board_id");
  const fetchList_Col = async () => {
    const list_Col_Data = await fetch(apiUrl.getLists, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        board_id: board_id,
      }),
    });

    const list_Col_Json = await list_Col_Data.json();

    setList_Col(list_Col_Json.data);

    if (list_Col_Json.length == 0) {
      setCreateListPostApi({
        name: "",
        board_id: board_id,
      });
    }
    setCreateListPostApi({
      name: "",
      board_id: board_id,
    });
  };

  useEffect(() => {
    fetchList_Col();
  }, [reRender, board_id]);

  return [list_Col, createListPostApi, setCreateListPostApi];
};
