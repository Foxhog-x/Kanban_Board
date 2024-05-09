import { useEffect, useState } from "react";

export const useFetchCards = (reRender) => {
  const [cards, setCards] = useState([]);
  const fetchCards = async () => {
    const cardsData = await fetch("http://localhost:8000/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const cardData_Json = await cardsData.json();
    setCards(cardData_Json);
  };

  useEffect(() => {
    fetchCards();
  }, [reRender]);
  console.log(cards);
  return [cards, setCards];
};
