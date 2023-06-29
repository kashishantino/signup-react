import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
const Signup = () => {
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,

      email,

      password,

      phone,
    };

    axios

      .post("http://127.0.0.1:8000/sign_up/", user)

      .then(function (response) {
        console.log("Signup successful!");

        console.log(response.data);

        alert("Signup successful!");
      })

      .catch(function (error) {
        console.error("Signup failed!");

        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border pl-2 pr-2">
        <h1 className="text-lg font-bold mb-0">Sign Up</h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mt-8 flex">
            <label htmlFor="username">Username:</label>

            <input
              className="border ml-2"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mt-8 flex">
            <label htmlFor="email">Email:</label>

            <input
              className="border ml-10"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mt-8 flex">
            <label htmlFor="password">Password:</label>

            <input
              className="border ml-3"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mt-8 flex">
            <label htmlFor="phone">phone:</label>

            <input
              className="border ml-8"
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center px-10">
            <div className="mt-8">
              <button
                className="border bg-blue-500 mb-3 p-2 rounded-lg"
                type="submit"
              >
                Sign Up
              </button>
            </div>

            <div className="mt-8">
              <button
                className="border bg-blue-500 mb-3 p-2 rounded-lg"
                type="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
