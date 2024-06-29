import { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";

import styles from "./Loginpage.module.css";
import useBackdropStore from "../../store/useBackdropStore";
import { useToastStore } from "../../store/useToastStore";
import { SimpleSnackbar } from "../../components/toast/SimpleSnackbar";

// Define the validation schema using Yup

const Loginpage = () => {
  const { showBackdrop, hideBackdrop } = useBackdropStore();
  const { addToast } = useToastStore();
  const [checked, setChecked] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm;

  const fetchLoginUrl = async (url, data) => {
    showBackdrop();
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        hideBackdrop();
        addToast("Login Successful", "success");
      } else {
        console.error(
          `Error: Received response with status code ${response.status}`
        );
        if (response.status === 400) {
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Fetch error", error);

      hideBackdrop();
    }
  };
  const onSubmit = async (data) => {
    if (checked) {
      fetchLoginUrl("http://localhost:8000/admin/login", data);
    } else {
      fetchLoginUrl("http://localhost:8000/member/login", data);
    }
  };

  return (
    <div>
      <div className={styles.main_container}>
        <div className={styles.left_content}></div>
        <div className={styles.right_content}>
          <h2>Hi Welcome</h2>
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Stack mt={3} gap={3}>
                <TextField
                  autoComplete="true"
                  id="email"
                  label="Email"
                  variant="outlined"
                  {...register("email")}
                />
                {errors.email && (
                  <p style={{ color: "red" }}>{errors.email.message}</p>
                )}
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </Stack>
              <Stack
                flexDirection={"row"}
                mt={4}
                justifyContent={"space-between"}
                margin={5}
              >
                <FormControlLabel
                  value="top"
                  control={
                    <Switch
                      color="primary"
                      checked={checked}
                      onChange={() => setChecked(!checked)}
                    />
                  }
                  label="Admin Login"
                  labelPlacement="end"
                />

                <Button type="submit" variant="contained" size="large">
                  Login
                </Button>
              </Stack>
            </Box>
          </form>
        </div>
        <SimpleSnackbar />
      </div>
    </div>
  );
};

export default Loginpage;
