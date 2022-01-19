import React, { useState } from "react";
import { useAuth } from "../../../use-auth";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

const SignUp = ({
  handleLoginActions,
  disableLoginSubmit,
  showLoginLoading
}) => {
  //const [signupEmail, setsignupEmail] = useState("");
  // const [signupPassword, setsignupPassword] = useState("");
  // const [disableSubmit, setDisableSubmit] = useState(false);
  // const [loadingLogin, setLoadingLogin] = useState(false);
  const auth = useAuth();
  // display alert
  // const alertMessage = () => {
  // onChange={event => {
  //   setLoginPassword(event.target.value);
  // }}

  const submitUserSignup = () => {
    handleLoginActions(true, true);
    // auth.signup(signupEmail, signupPassword);
  };
  // }
  /* TODO
        (+) Add social logins (google/facebook)
    */

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
          onClick={e => submitUserSignup(e)}
        >
          {/* <Link style={{ textDecoration: "none" }} to="/dashboard"> */}
          <Typography sx={{ color: "#fff" }} variant="subtitle1">
            Sign Up
          </Typography>
          {/* </Link> */}
        </Button>
      </FormControl>
    </>
  );
};

export default SignUp;
