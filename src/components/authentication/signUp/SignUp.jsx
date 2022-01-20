import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";

const SignUp = ({
  handleLoginActions,
  disableLoginSubmit,
  showLoginLoading,
  setAuthEmail,
  setAuthPassword
}) => {
  const displaySubmitText = () => {
    return showLoginLoading ? (
      <CircularProgress color="inherit" />
    ) : (
      <Typography sx={{ color: "#fff" }} variant="subtitle1">
        Sign Up
      </Typography>
    );
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
          autoComplete="current-password"
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
      </FormControl>
    </>
  );
};

export default SignUp;
