import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  function handleLogin() {
    login(email, password).then((res) => {
      if (res.ok) {
        navigate("/");
      }
    });
  }

  return (
    <>
      <h2>Login</h2>
      <div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(email) => setEmail(email.target.value)}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          type="password"
          onChange={(password) => setPassword(password.target.value)}
        />
      </div>
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
}
