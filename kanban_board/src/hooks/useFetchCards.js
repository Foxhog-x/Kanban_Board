import { useContext, useEffect, useState } from "react";
import { BackdropContext } from "../context/BackdropContext";

export const useFetchCards = (reRender) => {
  const [showBackdrop, setShowBackdrop] = useContext(BackdropContext)
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    setShowBackdrop(true)
    const cardsData = await fetch("http://localhost:8000/api/cards", {
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
