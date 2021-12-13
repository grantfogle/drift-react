import React, { Fragment } from "react";
import "./login.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Login = () => {
  return (
    <Fragment className="login">
      <Box
        sx={{
          backgroundColor: "rgba(65, 84, 179)",
          height: "100%",
          width: "100%"
        }}
      >
        <Typography variant="h2" mb={2} sx={{ color: "#fff" }}>
          Welcome to Drift
        </Typography>
        <Box
          sx={{
            backgroundColor: "#fff",
            height: "400px",
            width: "300px",
            borderRadius: "10px",
            margin: "0 auto"
          }}
        ></Box>
        <Button variant="outlined">Login</Button>
        <Button variant="outlined">Sign Up</Button>
      </Box>
    </Fragment>
  );
};

export default Login;
