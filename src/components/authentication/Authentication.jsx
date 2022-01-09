import React, { useState, useContext } from "react";
import Login from "./login/Login";
import SignUp from "./signUp/SignUp";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typgraphy from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AuthContext } from "../../context/AuthContext";

const Authentication = () => {
  const [loginTabValue, setLoginTabValue] = useState("login");
  // const { authState, dispatch } = useContext(AuthContext);

  const handleTabChange = (event, newValue) => {
    setLoginTabValue(newValue);
  };

  const displayLoginForm = () => {
    return loginTabValue === "login" ? <Login /> : <SignUp />;
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
            height: 600,
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
            <Typgraphy variant="h4">Log in to Your Drift Account</Typgraphy>
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
