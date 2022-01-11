import React, { useState } from "react";
import { useAuth } from "../../../use-auth";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const Login = ({ handleLoginActions, disableLoginSubmit, showLoginLoading }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const auth = useAuth();

  /* TODO
        (+) Add social logins (google/facebook)
        (+) remember me?
        (+) forgot password toggle?
    */

  const submitLogin = async e => {
    handleLoginActions(true, true);
    // auth.signin(loginEmail, loginPassword);
  };

  const displaySubmitText = () => {
    return showLoginLoading ? (
      <CircularProgress color="inherit" />
    ) : (
        <Link style={{ textDecoration: "none" }} to="/dashboard">
          <Typography sx={{ color: "#fff" }} variant="subtitle1">
            Login
        </Typography>
        </Link>
      );
  };

  return (
    <>
      <FormControl sx={{ m: 2, width: 300 }} variant="outlined">
        <TextField
          id="outlined-required"
          sx={{ m: 1 }}
          required
          label="Email"
          onChange={event => {
            setLoginEmail(event.target.value);
          }}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          value={loginPassword}
          onChange={event => {
            setLoginPassword(event.target.value);
          }}
        />
        <Button
          sx={{ m: 1 }}
          size="medium"
          variant="contained"
          color="primary"
          disabled={disableLoginSubmit}
          onClick={e => submitLogin(e)}
        >
          {displaySubmitText()}
        </Button>
        <Button size="small" disabled={true}>
          forgot password?
        </Button>
      </FormControl>
    </>
  );
};

export default Login;
