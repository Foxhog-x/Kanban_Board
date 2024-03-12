// import { useEffect } from "react";
import { FlatAddIcon } from "../Components/FlatAddIcon";
import "../pages/newpage.css";
import "../App.css";
import { Cards } from "./Cards";
// eslint-disable-next-line react/prop-types
export const Listcolumn = ({ list_column_name, setOpen }) => {
  // const [apiCardData, setApiCardData] = useState([]);
  const card = [
    {
      column_id: 1,
      name: "To do",
      board_id: 1,
      position: 1,
      card_id: 4,
      title: "Do a testcase on current softwere",
      description: "start with field",
      assignee_id: 2,
      due_date: "2024-03-09T18:30:00.000Z",
      priority: "Medium",
      status: "To Do",
    },
    {
      column_id: 1,
      name: "To do",
      board_id: 1,
      position: 1,
      card_id: 3,
      title: "Do a testcase on current softwere",
      description: "start with field",
      assignee_id: 1,
      due_date: "2024-04-21T18:30:00.000Z",
      priority: "High",
      status: "To Do",
    },
    {
      column_id: 3,
      name: "Doing",
      board_id: 1,
      position: 2,
      card_id: 5,
      title: "Do a testcase on current softwere",
      description: "start with field",
      assignee_id: 2,
      due_date: "2024-03-09T18:30:00.000Z",
      priority: "Low",
      status: "In Progress",
    },
  ];
  const handleCardClick = () => {
    console.log("its works");
  };
  // useEffect(() => {
  //   const fetchCardApi = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8000/api/boards/list_type/cards",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await response.json();

  //       setApiCardData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchCardApi();
  // }, []);

  return (
    <div className="main_container">
      <div className="todo">
        <div className="create_Button"></div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <h2> {list_column_name}</h2>
          <button
            className="createFlatIconBtn"
            onClick={() =>
              setOpen((prev) => {
                return { ...prev, boolean: true, list_type: "todo" };
              })
            }
          >
            <FlatAddIcon />
          </button>
        </div>
        <>
          {card.map((cardValue) => {
            if (cardValue.name === list_column_name) {
              // eslint-disable-next-line react/jsx-key
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="card_scrollable_todo">
                  <Cards />
                </div>
              );
            }
          })}
        </>
      </div>
    </div>
  );
};
