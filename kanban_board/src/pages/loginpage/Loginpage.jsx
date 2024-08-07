import React, { useContext, useEffect, useState } from "react";
import styles from "./Loginpage.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { BackdropContext } from "../../context/BackdropContext";

import apiUrl from "../../utils/urls";
export const Loginpage = ({ board }) => {
  const [showBackdrop, setShowBackdrop] = useContext(BackdropContext);

  const navigate = useNavigate();

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
    localStorage.setItem("userData", JSON.stringify(userName));
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if ((authToken !== null) | undefined | "") {
      console.log(board, "boradsss");
    } else {
      console.log("token not get it");
    }
    setShowBackdrop(false);
    20;
  }, []);
  const handleSubmit = (e) => {
    setShowBackdrop(true);
    e.preventDefault();
    fetch(apiUrl.login, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: inputStore.email,
        password: inputStore.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setShowBackdrop(false);
        localStorage.setItem("authToken", data?.authToken);
        localStorage.setItem("creator_id", data?.user_id);

        if (data.success) {
          setUserToLocalStorage(data.users);
          navigate("/");
        } else {
          console.log("failed");
        }
      });
  };

  return (
    <div className={styles.main_container}>
      <img
        className={styles.left_inner}
        src="loginpage.jpg"
        alt="login image"
        height={600}
      />
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
