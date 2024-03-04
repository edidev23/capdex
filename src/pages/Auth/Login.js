/* eslint-disable no-unreachable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoComponent from "../../components/LogoComponent";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const navigate = useNavigate();

  const [getSignStatusValue, setSignStatusValue] = useState("sign");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      password: "",
    });
  };

  const isDisabled = formData.email === "" || formData.password === "";

  const forgotPassword = () => {
    setSignStatusValue("forgot");
  };

  return (
    <>
      <div className="login-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <LogoComponent />
              <div className="content">
                {(() => {
                  if (getSignStatusValue === "sign") {
                    return (
                      <>
                        <form onSubmit={handleSubmit}>
                          <div className=" card-login">
                            <h3 className="mb-4">Log In</h3>

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

                            <div className="mb-2">
                              <label className="form-label" htmlFor="password">
                                Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                              />
                            </div>

                            <div className="mb-3">
                              <a onClick={() => forgotPassword()}>
                                Forgot password?
                              </a>
                            </div>

                            {/* <button
                              className="btn btn-primary w-100 mb-4"
                              onClick={() => navigate("/")}
                            >
                              Log In
                            </button> */}

                            <button
                              disabled={isDisabled}
                              type="submit"
                              className="btn btn-primary w-100 mb-4"
                            >
                              Log In
                            </button>

                            <div className="text-center">
                              Don't have an account yet? <a>Sign up!</a>
                            </div>
                          </div>
                        </form>
                      </>
                    );
                  } else if (getSignStatusValue === "forgot") {
                    return <ForgotPassword />;
                  }
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
