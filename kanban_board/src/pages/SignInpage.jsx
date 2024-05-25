import "./loginpage.css";
import logImage from "../assets/images.png";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import { SnackBarContext } from "../context/SnackBarContext";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        KanbanBoard
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export const SignInpage = ({ loginData, setLoginData }) => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({ email: "", password: "" });

  console.log(loginData, "login auth");
  const handlesubmitData = (e) => {
    e.preventDefault();
    try {
      fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: inputData.email,
          password: inputData.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("authToken", data.authToken);
          if (data.success) {
            navigate("/");
            window.alert(data.message);
          } else {
            console.log("failed");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputData = (e) => {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ height: "90vh" }}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ width: 150, height: 150, m: 1, bgcolor: "secondary.main" }}
        >
          <img src={logImage} alt="logo" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => handleInputData(e)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => handleInputData(e)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e) => handlesubmitData(e)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
