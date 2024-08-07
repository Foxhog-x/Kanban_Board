import { useState } from "react";

export const useHandleClick = () => {
  const [infoRightCard, setInfoRightCard] = useState([]);

  const [state, setState] = useState({
    right: false,
  });
  const handleCardClick = (cardInfovalue) => {
    setState((prev) => {
      return { ...prev, right: true };
    });
    setInfoRightCard(cardInfovalue);

  };

  return { handleCardClick, infoRightCard, state, setState };
};
