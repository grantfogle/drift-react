import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";

const Login = ({
  handleLoginActions,
  disableLoginSubmit,
  showLoginLoading,
  authEmail,
  setAuthEmail,
  authPassword,
  setAuthPassword
}) => {
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  /* TODO
        (+) Add social logins (google/facebook)
        (+) remember me?
        (+) forgot password toggle?
    */

  // const submitLogin = async e => {
  //   handleLoginActions(true, true);
  // };

  const displaySubmitText = () => {
    return showLoginLoading ? (
      <CircularProgress color="inherit" />
    ) : (
      // <Link style={{ textDecoration: "none" }} to="/dashboard">
      <Typography sx={{ color: "#fff" }} variant="subtitle1">
        Login
      </Typography>
      // </Link>
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
            setAuthEmail(event.target.value);
          }}
        />

        <TextField
          sx={{ m: 1 }}
          required
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={event => {
            setAuthPassword(event.target.value);
          }}
        />
        <Button
          sx={{ m: 1 }}
          size="medium"
          variant="contained"
          color="primary"
          disabled={disableLoginSubmit}
          onClick={e => handleLoginActions()}
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
