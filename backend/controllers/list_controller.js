
const db_con = require('../db')
let positionArr = [];

const getListCol = async (req, res) => {
    let { board_id } = req.body;

    board_id = isNaN(board_id) ? null : board_id;

    if (board_id === null) {
        db_con.query("SELECT * FROM list_column", (error, result) => {
            if (error) res.status(400).json({ success: false, message: error });
            return res.status(200).json({ data: result });
        });
    } else {
        try {
            db_con.query(
                `select * from list_column where board_id = ${board_id}`,
                (error, result) => {
                    if (error) res.status(500).json({ message: error });
                    if (result) {
                        res.status(200).json({ data: result });
                    }
                }
            );
        } catch (error) {
            console.error("Error fetching list columns:", error);
        }
    }
}

const createListCol = (req, res) => {
    const { createList_Obj } = req.body;

    const { name, board_id } = createList_Obj;

    const query = `INSERT INTO list_column (name, board_id, position)values(?,?,?)`;
    db_con.query(
        `SELECT position From list_column where board_id = ${board_id}`,
        (error, result) => {
            if (error) console.log(error);
            if (result) {
                for (let i = 0; i < result.length; i++) {
                    const { position } = result[i];
                    positionArr.push(position);
                }
                let newPostionInsert = positionArr.length + 1;

                db_con.query(
                    query,
                    [name, board_id, newPostionInsert],
                    (error, result) => {
                        if (error) res.status(500).json({ message: error });
                        res
                            .status(201)
                            .json({ success: true, message: "List Create Successfully" });
                    }
                );

            }
        }
    );
}


const deleteListCol = (req, res) => {
    const { column_id } = req.body;
    console.log(column_id, "col id")
    db_con.query(
        `DELETE FROM list_column 
    WHERE column_id = ${column_id};`,
        (err, result) => {
            if (err) console.log(err);
            if (result) {
                res.status(200).json({ success: true });
                console.log("successfully deleted the List_Column");
            }
        }
    );
}


module.exports = { getListCol, createListCol, deleteListCol }