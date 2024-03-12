import { Listcolumn } from "../Components/Listcolumn";
import "./newpage.css";
// eslint-disable-next-line react/prop-types
export const Newhomepage = ({ setOpen }) => {
  const list_Col = [
    {
      column_id: 1,
      name: "To do",
      board_id: 1,
      position: 1,
    },
    {
      column_id: 3,
      name: "Doing",
      board_id: 1,
      position: 2,
    },
  ];
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          alignContent: "center",
          backgroundColor: "background rgb(46,129,247)",
          background:
            "radial-gradient(circle, rgba(46,129,247,0.6965161064425771) 25%, rgba(44,160,184,0.6516981792717087) 100%)",
          padding: "14px",
        }}
      >
        {" "}
        <button>Create List</button>
      </div>
      <div style={{ overflowX: "auto" }}>
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
