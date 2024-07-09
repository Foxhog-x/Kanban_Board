import { useState } from "react";
import styles from "./Signuppage.module.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
export const Signuppage = () => {
  const navigate = useNavigate();
  const [inputStore, setInputStore] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputStore((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://agile-board-pi.vercel.app/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: inputStore.firstName.trim(),
        lastName: inputStore.lastName.trim(),
        email: inputStore.email,
        password: inputStore.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/login");
          window.alert(data.message);
        } else {
          console.log("failed");
        }
      });
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.left_inner}></div>
      <div className={styles.right_inner}>
        <h2>Hi Welcome</h2>
        <h1>Signup</h1>
        <Box>
          <Stack mt={3} gap={3}>
            <TextField
              name="firstName"
              id="firstName"
              label="First Name"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              id="lastName"
              label="Last Name"
              variant="outlined"
              onChange={handleChange}
            />
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
