import React, { useState } from "react";

import { login } from "./../api/login";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if ((email, password)) {
      login(email, password)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          window.location.reload();
        })
        .catch((err) => console.error(err));
    } else {
      toast.error("email and password fields could not be empty! ");
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  return (
    <form className="login__form" onSubmit={handleLogin}>
      <input
        className="login__input"
        value={email}
        onChange={handleChange}
        name="email"
        type="text"
      />
      <input
        className="login__input"
        value={password}
        onChange={handleChange}
        name="password"
        type="password"
      />
      <button className="login__btn" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
