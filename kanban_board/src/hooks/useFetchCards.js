import { useContext, useEffect, useState } from "react";
import { BackdropContext } from "../context/BackdropContext";
import apiUrl from "../utils/urls";

export const useFetchCards = (reRender) => {
  const [showBackdrop, setShowBackdrop] = useContext(BackdropContext);
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    setShowBackdrop(true);
    const cardsData = await fetch(apiUrl.getCards, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const cardData_Json = await cardsData.json();
    setCards(cardData_Json);
    setShowBackdrop(false);
  };

  useEffect(() => {
    fetchCards();
  }, [reRender]);
  console.log(cards);
  return [cards, setCards];
};
