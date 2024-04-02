import React, { useState } from "react";
import navLogo from "../../assets/images/nav-logo.svg";
import { NavLink } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";

const API_URL = "https://dummyjson.com/auth/login";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(API_URL, { username, password })
      .then((response) => {
        const data = response.data;
        if (data.message === "Error") {
          toast.error("Username or Password is incorrect");
        } else {
          console.log(data);
          localStorage.setItem("token", data.token);
          window.open("/admin", "_self");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Username or Password is incorrect");
      });
  };

  return (
    <section className="login">
      <div className="container">
        <div className="login-all">
          <div className="login-top">
            <NavLink to={"/"}>
              <img src={navLogo} alt="" />
            </NavLink>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="login-input">
              <div className="login-input-1">
                <label htmlFor="">Username*</label>
                <input
                  className="login-username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="login-input-1">
                <label htmlFor="">Password*</label>
                <input
                  className="login-psasword"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="login-forgot">
              <div className="login-checkbox">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <p>Forgot Password?</p>
            </div>
            <div className="login-bottom">
              <button type="submit">Login</button>
              <p>Signup?</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
