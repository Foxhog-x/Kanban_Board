import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../context/BoardContext";

export const Hompage = () => {
  const boardValues = React.useContext(BoardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (boardValues) {
      navigate(`/boards/public/${boardValues[0]?.name}`);
    }
  }, [])

  return (boardValues && (<div></div>));
};
