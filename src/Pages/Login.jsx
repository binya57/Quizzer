import React, { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../Utils/Authentication";
import "./Styles/Login.style.css";

// material ui components:
import { default as MuiAvatar } from "@mui/material/Avatar";
import { default as MuiButton } from "@mui/material/Button";
import { default as MuiCssBaseline } from "@mui/material/CssBaseline";
import { default as MuiTextField } from "@mui/material/TextField";
import { default as MuiFormControlLabel } from "@mui/material/FormControlLabel";
import { default as MuiCheckbox } from "@mui/material/Checkbox";
import { default as MuiBox } from "@mui/material/Box";
import { default as MuiLockOutlinedIcon } from "@mui/icons-material/LockOutlined";
import { default as MuiTypography } from "@mui/material/Typography";
import { default as MuiContainer } from "@mui/material/Container";

const Login = () => {
  const { user, logIn } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    const isCheckbox = e.target.value.type === "checkbox";
    setInputValues((oldValues) => ({
      ...oldValues,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(inputValues.username);
  };

  useEffect(() => {
    if (user.isAuth) navigate(from, { replace: true });
  });

  return (
    <MuiContainer component="main" maxWidth="xs">
      <MuiCssBaseline />
      <MuiBox
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <MuiAvatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <MuiLockOutlinedIcon />
        </MuiAvatar>
        <MuiTypography component="h1" variant="h5">
          Log in
        </MuiTypography>
        <MuiBox component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <MuiTextField
            margin="normal"
            required={true}
            fullWidth
            id="username"
            label="your name"
            name="username"
            autoFocus
            value={inputValues.username}
            onChange={handleChange}
          />
          <MuiTextField
            margin="normal"
            required={true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={inputValues.password}
            onChange={handleChange}
          />
          <MuiFormControlLabel
            control={
              <MuiCheckbox
                color="primary"
                name="remember"
                value={inputValues.remember}
                onChange={handleChange}
              />
            }
            label="Remember me"
          />
          <MuiButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </MuiButton>
        </MuiBox>
      </MuiBox>
    </MuiContainer>
  );
};
export default Login;
