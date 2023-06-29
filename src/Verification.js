import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";

const Verification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      otp,
    };

    axios
      .post("http://127.0.0.1:8000/send/", { email })
      .then(function (response) {
        if (response.status === 200) {
          console.log(response.status);
          console.log("Otp send successful!");
          console.log("Response data:", response.data);
          setVerificationStatus(true);
          alert("Otp Successfully Send");
        }
      })
      .catch(function (error) {
        console.error("Failed to request OTP!");
        console.error(error);
      });
  };

  if (verificationStatus) {
    const handleVerification = (e) => {
      e.preventDefault();

      axios
        .post("http://127.0.0.1:8000/verify/", { email, otp })
        .then(function (response) {
          console.log("OTP verified successfully!");
          console.log(response.data);
        })
        .catch(function (error) {
          console.error("Failed to verify OTP!");
          console.error(error);
        });
    };

    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="border pl-2 pr-2">
            <h1 className="text-lg font-bold mb-4">Verification</h1>
            <form onSubmit={handleVerification}>
              <div className="mt-8">
                <label htmlFor="otp">Enter OTP:</label>
                <input
                  className="border ml-2"
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                  required
                />
              </div>
              <div className="mt-8">
                <button className="border bg-blue-500 mb-3" type="submit">
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border pl-2 pr-2 ">
        <h1 className="text-lg font-bold mb-0">Email Verify</h1>

        <div className="mt-4">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex items-center gap-10">
              <div className="">
                <label htmlFor="email">Email:</label>
                <input
                  className="border ml-7 border-black"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="">
                <button
                  className="border bg-blue-500 p-1 w-24 rounded-lg"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verification;
