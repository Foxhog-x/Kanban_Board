import React, { useContext, useState } from "react";
import styles from "./Loginpage.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BackdropContext } from "../../context/BackdropContext";
export const Loginpage = () => {
  const [showBackdrop, setShowBackdrop] = useContext(BackdropContext)


  const navigate = useNavigate();
  const token = localStorage.getItem("authToken");
  if (token) {
    console.log("token get it ");
  } else {
    console.log("token not get it");
  }
  const [inputStore, setInputStore] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputStore((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const setUserToLocalStorage = (users) => {
    const userName = users[0];
    console.log(userName, "usersksadfkjsd")
    localStorage.setItem('userData', JSON.stringify(userName))
  }


  const handleSubmit = (e) => {
    setShowBackdrop(true)
    e.preventDefault();
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputStore.email,
        password: inputStore.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShowBackdrop(false)
        localStorage.setItem("authToken", data?.authToken);
        localStorage.setItem("creator_id", data?.user_id)

        if (data.success) {
          setUserToLocalStorage(data.users)
          navigate("/");
        } else {
          console.log("failed");
        }
      });
  };
  console.log(inputStore);
  return (
    <div className={styles.main_container}>
      <div className={styles.left_inner}></div>
      <div className={styles.right_inner}>
        <h2>Hi Welcome</h2>
        <h1>Login</h1>
        <Box>
          <Stack mt={3} gap={3}>
            <TextField
              name="email"
              id="email"
              label="Email"
              variant="outlined"
              onChange={handleChange}
            />

            <TextField
              name="password"
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={handleChange}
            />
          </Stack>
          <Stack
            flexDirection={"row"}
            mt={4}
            justifyContent={"space-between"}
            margin={5}
          >
            <Button
              type="submit"
              variant="contained"
              size="large"
              onClick={(e) => handleSubmit(e)}
            >
              Login
            </Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
};
