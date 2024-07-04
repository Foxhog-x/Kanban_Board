const db_con = require('../db')

const getAllBoard = (req, res) => {
    db_con.query("SELECT * FROM board", (error, results) => {
        if (error) {
            return res.status(500).json({ message: error.message });
        }
        console.log(results);
        res.status(200).json({ success: true, data: results });
    });
}


const createBoard = (req, res) => {
    const { board_name, board_Type } = req.body;
    console.log(req.user_id.id, "userid");
    const board_Type_checked = board_Type === "Public" ? 0 : 1;
    const createQuery =
        "Insert into board (name, creator_id, status) values(?,?,?)";
    db_con.query(
        createQuery,
        [board_name, req.user_id.id, board_Type_checked],
        (error, results) => {
            if (error) res.status(500).json({ error });
            if (results) {
                db_con.query("select last_insert_id()", (error, result) => {
                    if (error) throw error;
                    const board_id = result[0]["last_insert_id()"];
                    console.log(board_id, "board_id got from the last insert sql");
                    console.log("board Rows inserted: " + results.affectedRows);
                    res.status(201).json({
                        success: true,
                        message: "successfully Created",
                        latest_board_id: board_id,
                    });
                });
            }
        }
    );


}
const deleteBoard = (req, res) => {
    const { board_idDelete } = req.body;
    console.log(board_idDelete, "board_id");
    db_con.query(
        ` delete from board where board_id = ${board_idDelete}`,
        (error, results) => {
            if (error) console.log(error);
            if (results) {
                console.log("successfully deleted");
                res
                    .status(201)
                    .json({ success: true, message: "successfully Deleted" });
            }
        }
    );
}



module.exports = { getAllBoard, createBoard, deleteBoard }