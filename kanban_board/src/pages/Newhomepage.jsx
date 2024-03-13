import { useEffect, useState } from "react";
import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
// eslint-disable-next-line react/prop-types
export const Newhomepage = ({ setOpen }) => {
  const [list_Col, setList_Col] = useState([]);
  const fetchList_Col = async () => {
    const list_Col_Data = await fetch("http://localhost:8000/api/list_column", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const convertingToJson = await list_Col_Data.json();
    console.log(convertingToJson, "consoling data");
  };
  useEffect(() => {
    fetchList_Col();
  }, []);
  // const list_Col = [
  //   {
  //     column_id: 1,
  //     name: "To do",
  //     board_id: 1,
  //     position: 1,
  //   },
  //   {
  //     column_id: 3,
  //     name: "Doing",
  //     board_id: 1,
  //     position: 2,
  //   },
  // ];
  return (
    <>
      <div
        className="createlist_css"
        style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "center",
          padding: "14px",
        }}
      >
        {" "}
        <button>Create List</button>
      </div>
      <div
        className="background_color_main_conatin"
        style={{ overflowX: "auto" }}
      >
        <div className="main_container">
          <div className="horizontal_grid">
            {list_Col.map((value) => {
              // eslint-disable-next-line react/jsx-key
              return (
                // eslint-disable-next-line react/jsx-key
                <Listcolumn
                  key={value.name}
                  list_column_name={value.name}
                  setOpen={setOpen}
                />
              );
            })}
          </div>
        </div>
        ;{/* <Listcolumn value={value} setOpen={setOpen} /> */}
      </div>
    </>
  );
};
