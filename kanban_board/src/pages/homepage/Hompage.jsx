import React from "react";
import { useNavigate } from "react-router-dom";
import { BoardContext } from "../../context/BoardContext";

export const Hompage = () => {
  const boardValues = React.useContext(BoardContext);
  const navigate = useNavigate();
  if (boardValues) {
    navigate(`/boards/public/${boardValues[0]?.name}`);
  }
  return <div>hello</div>;
};
