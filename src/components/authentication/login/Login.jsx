import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [loadingLogin, setLoadingLogin] = useState(false);

  /* TODO
        (+) Add social logins (google/facebook)
        (+) remember me?
        (+) forgot password toggle?
    */

  const submitLogin = async e => {
    setDisableSubmit(true);
    setLoadingLogin(true);
    // make
    // await fetch("http://localhost:8080/api/rivers").then(res =>
    //   console.log(res)
    // );
  };

  const displaySubmitText = () => {
    return loadingLogin ? (
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
          sx={{ m: 1 }}
          required
          id="outlined-required"
          label="Email"
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          sx={{ m: 1 }}
          size="medium"
          variant="contained"
          color="primary"
          disabled={disableSubmit}
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
