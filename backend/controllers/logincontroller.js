const bcrypt = require("bcrypt");
const db_con = require('../db');
const secret = "mysecret";
const jwt = require("jsonwebtoken");
const getLogin = (req, res) => {
    let email = req.body.email;
    const textPass = req.body.password;
    const emailCheckQuery = `SELECT * FROM user WHERE email = ?`;
    const getAllMembersQuery = 'SELECT user_id, username FROM user';

    try {
        // Check if email exists in database
        db_con.query(emailCheckQuery, [email], (error, results) => {
            if (error) {
                console.error("Error executing emailCheckQuery:", error);
                return res.status(500).json({ success: false, message: "Internal server error" });
            }

            if (results.length === 0) {
                return res.status(400).json({ success: false, message: "User does not exist" });
            }

            let passwordHash = results[0]?.password;
            let user_id = results[0]?.user_id;

            // Compare passwords
            bcrypt.compare(textPass, passwordHash, (err, result) => {
                if (err) {
                    console.error("Error comparing passwords:", err);
                    return res.status(500).json({ success: false, message: "Internal server error" });
                }

                if (result) {
                    // Passwords match, generate JWT token
                    const user = { id: user_id };
                    const jwtAuthToken = jwt.sign(user, secret);

                    // Fetch additional user data
                    db_con.query(getAllMembersQuery, (err, results) => {
                        if (err) {
                            console.error("Error fetching user data:", err);
                            return res.status(500).json({ success: false, message: "Internal server error" });
                        }

                        let userNameData = results.map(row => ({ user_id: row.user_id, username: row.username }));

                        res.status(201).json({
                            success: true,
                            user_id: user_id,
                            authToken: jwtAuthToken,
                            message: "Login successful",
                            users: userNameData
                        });
                    });
                } else {
                    // Passwords do not match
                    res.status(400).json({ success: false, message: "Invalid credentials" });
                }
            });
        });
    } catch (error) {
        console.error("Error in try block:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}



module.exports = { getLogin }