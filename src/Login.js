import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    axios
      .post("http://127.0.0.1:8000/login/", user)
      .then(function (response) {
        console.log("Login successful!");
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Login failed!");
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="border pl-2 pr-2">
          <h1 className="text-lg font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-8">
              <label htmlFor="email">Email:</label>
              <input
                className="border ml-2"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-8 ml-2">
              <label htmlFor="password">Password:</label>
              <input
                className="border ml-2"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-8">
              <button className="border bg-blue-500 mb-3" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
