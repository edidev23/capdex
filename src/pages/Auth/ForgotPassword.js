/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoComponent from "../../components/LogoComponent";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [getSignStatusValue, setSignStatusValue] = useState("sign");

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can do something with the form data, like send it to a server
    console.log(formData);
    // Reset the form after submission
    setFormData({
      email: "",
    });
  };

  const isDisabled = formData.email === "";

  const setSign = () => {
    setSignStatusValue("sign");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className=" card-login">
          <h3 className="mb-4">Forgot password?</h3>
          <p>No worries, we will send you reset instructions.</p>

          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button
            disabled={isDisabled}
            type="submit"
            className="btn btn-primary w-100 mb-4"
          >
            Reset password
          </button>

          <div className="text-center">
            <a onClick={() => setSign()}>Back to log in</a>
          </div>
        </div>
      </form>
    </>
  );
};

export default ForgotPassword;
