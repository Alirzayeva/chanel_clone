import React, { useState } from "react";
import { object, string } from "yup";
import { errorSwal, successSwal } from "../utils/SweetAlert";

const Form = () => {
  const [activeForm, setActiveForm] = useState("register");

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  /// Sign in
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const loginSchema = object({
    password: string()
      .min(8, "Password must be longer than 8 characters!")
      .max(18, "Password must be less than 18 characters!"),
    email: string()
      .email("Please enter a valid email!")
      .required("Please enter your email!"),
  });

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await loginSchema.validate(user);
      successSwal("You are logged in!");
    } catch (error) {
      errorSwal("error", error.message);
    }
  };

  /// Register
  const [newUser, setNewUser] = useState({
    userName: "",
    lastName: "",
    email: "",
    number: "",
    password: "",
  });

  const handleRegisterChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const registerSchema = object({
    password: string()
      .required("Please enter your password!")
      .min(8, "Password must be longer than 8 characters!")
      .max(18, "Password must be less than 18 characters!"),
    email: string().email().required("Please enter a valid email!"),
    lastName: string().required("Please include your surname!").min(3).max(30),
    userName: string().required("Please include your name!").min(3),
  });

  const registerForm = async (e) => {
    e.preventDefault();
    try {
      await registerSchema.validate(newUser);
      successSwal("You are Registered!");
    } catch (error) {
      errorSwal("error", error.message);
    }
  };

  return (
    <section className="formSection">
      <div className="container">
        <h2>Account</h2>
        <div className="formInfo">
          <div className="headTitle">
            <h3
              onClick={() => handleFormChange("signIn")}
              className={activeForm === "signIn" ? "active" : ""}
            >
              Sign in
            </h3>
            <h3
              onClick={() => handleFormChange("register")}
              className={activeForm === "register" ? "active" : ""}
            >
              Register
            </h3>
          </div>
          {activeForm === "signIn" && (
            <div className="signInForm">
              <h4>Welcome back.</h4>
              <p>Sign in with your email and password.</p>
              <form>
                <div className="form">
                  <label htmlFor="email"></label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form">
                  <label htmlFor="password"></label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" onClick={submitForm}>
                  Sign in
                </button>
              </form>
            </div>
          )}
          {activeForm === "register" && (
            <div className="registerForm">
              <p className="checkoutText">
                Create an account and benefit from a more personal shopping
                experience, and quicker online checkout.
              </p>
              <p className="text">All fields are mandatory.</p>

              <form>
                <div className="form">
                  <label htmlFor="email"></label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="form">
                  <label htmlFor="email"></label>
                  <input
                    placeholder="First name"
                    type="text"
                    name="userName"
                    value={newUser.userName}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="form">
                  <label htmlFor="email"></label>
                  <input
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleRegisterChange}
                  />
                </div>
                <div className="form">
                  <label htmlFor="password"></label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleRegisterChange}
                  />
                </div>
                <button type="submit" onClick={registerForm}>
                  Create Account
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form;
