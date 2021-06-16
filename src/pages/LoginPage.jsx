import React, { useState } from "react";

import { login } from "./../api/login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };
  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
