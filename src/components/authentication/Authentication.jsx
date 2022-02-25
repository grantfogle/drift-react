import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Login from "./login/Login";
import SignUp from "./signUp/SignUp";
import { useAuth } from "../../use-auth";

const Authentication = () => {
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [loginTabValue, setLoginTabValue] = useState("login");
  const [disableLoginSubmit, setDisableLoginSubmit] = useState(false);
  const [showLoginLoading, setShowLoadingIcon] = useState(false);
  const auth = useAuth();

  const handleLoginActions = () => {
    setDisableLoginSubmit(true);
    setShowLoadingIcon(true);
    if (loginTabValue === "login") {
      logUserIn();
    } else {
      signUserUp();
    }
  };

  const displayErrorMessage = message => {
    setErrorMessage(message);
    setShowErrorMsg(true);
    setDisableLoginSubmit(false);
    setShowLoadingIcon(false);
    setTimeout(() => {
      setShowErrorMsg(false);
      setErrorMessage("");
    }, 5000);
  };

  // have a place where you keep common components like error messages
  const errorMessageComponent = () => {
    return showErrorMsg ? (
      <Box>
        <Typography variant="subtitle1" color="error">
          {errorMessage}
        </Typography>
      </Box>
    ) : (
      ""
    );
  };

  const logUserIn = () => {
    const isEmailValid = authEmail.includes("@") && authEmail.length >= 5;
    const isPasswordValid = authPassword.length >= 4;
    if (isEmailValid && isPasswordValid) {
      auth.signin(authEmail, authPassword);
    } else {
      displayErrorMessage("Please enter a valid email/password");
    }
  };
  const signUserUp = () => {
    const isEmailValid = authEmail.includes("@") && authEmail.length >= 5;
    const isPasswordValid = authPassword.length >= 4;
    if (isEmailValid && isPasswordValid) {
      auth.signup(authEmail, authPassword);
    } else {
      displayErrorMessage("Please enter a valid email/password");
    }
  };
  // error messages, user already exists, email/password were incorrect, etc.

  const handleTabChange = (event, newValue) => {
    setLoginTabValue(newValue);
  };

  const displayLoginForm = () => {
    return loginTabValue === "login" ? (
      <Login
        handleLoginActions={handleLoginActions}
        disableLoginSubmit={disableLoginSubmit}
        showLoginLoading={showLoginLoading}
        authEmail={authEmail}
        setAuthEmail={setAuthEmail}
        authPassword={authPassword}
        setAuthPassword={setAuthPassword}
      />
    ) : (
      <SignUp
        handleLoginActions={handleLoginActions}
        disableLoginSubmit={disableLoginSubmit}
        showLoginLoading={showLoginLoading}
        setAuthEmail={setAuthEmail}
        setAuthPassword={setAuthPassword}
      />
    );
  };

  return (
    <>
      <Box
        sx={{
          margin: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "#3498db",
          display: "flex",
          alignItems: "center"
        }}
      >
        <Container
          sx={{
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 400,
            padding: 5
          }}
          maxWidth="sm"
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Typography variant="h4">Log in to Your Drift Account</Typography>
            {errorMessageComponent()}
            <Tabs
              value={loginTabValue}
              onChange={handleTabChange}
              aria-label="wrapped label tabs example"
            >
              <Tab value="login" label="Log In" />
              <Tab value="signUp" label="Sign Up" />
            </Tabs>
            {displayLoginForm()}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Authentication;
