import { useContext, useEffect } from "react";
import { IsDropped_Context } from "../context/IsDropped_Context";
import { Droppable_Context } from "../context/Droppable_Context";
import { Draggable_Context } from "../context/Draggable_Context";

export const useUpdateCards = (cards, setCards) => {
  const [droppable_Position_id, setDroppable_Position_id] =
    useContext(Droppable_Context);
  const [isDropped, setIsDropped] = useContext(IsDropped_Context);
  const [draggable_id, setDraggable_id] = useContext(Draggable_Context);

  useEffect(() => {
    if (isDropped === true && droppable_Position_id !== null) {
      const updated_Array = cards?.map((value) => {
        if (value.card_id === draggable_id) {
          return { ...value, column_id: droppable_Position_id };
        }
        return value;
      });
      // console.log(updated_Array, "this is updated array");
      setCards(updated_Array);
      // Set droppable_Position_id to null separately
      setDroppable_Position_id(null);
    }
    // console.log(isDropped, "sdfsdf");
  }, [
    isDropped,
    droppable_Position_id,
    draggable_id,
    cards,
    setDroppable_Position_id,
    setCards,
  ]);
};
