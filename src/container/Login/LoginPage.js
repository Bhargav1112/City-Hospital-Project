import React, { useState } from "react";
import * as yup from "yup";

import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SingUp from "./SignUp";

function LoginPage(props) {
  const [userType, setUserType] = useState("login");
  // const [forgotPassword, setForgotPassword] = useState(false);

  const signUpHandler = () => {
    setUserType("signup");
  };
  const loginHandler = () => {
    setUserType("login");
    // setForgotPassword(false);
  };
  const forgotPasswordHandler = () => {
    // setForgotPassword(true);
    setUserType("forgotPassword");
  };

  let schemaObj;

  if (userType === "login") {
    schemaObj = {
      email: yup
        .string()
        .email("Please enter valid Email.")
        .required("Required!"),
      password: yup
        .string()
        .min(4, "Password should have minimum 4 characters")
        .required("Required!"),
    };
  } else if (userType === "signup") {
    schemaObj = {
      name: yup.string().max(15).required("Required!"),
      email: yup
        .string()
        .email("Please enter valid Email.")
        .required("Required!"),
      password: yup
        .string()
        .min(4, "Password should have minimum 4 characters")
        .required("Required!"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "password must be match.")
        .required("Required!"),
    };
  } else {
    schemaObj = {
      email: yup
        .string()
        .email("Please enter valid Email.")
        .required("Required!"),
    };
  }

  const schema = yup.object().shape(schemaObj);

  const formContent =
    userType === "login" ? (
      <Login
        onSignUp={signUpHandler}
        onForgotPwd={forgotPasswordHandler}
        schema={schema}
      />
    ) : (
      <SingUp onLogin={loginHandler} schema={schema} />
    );
  return (
    <section>
      <div className="container">
        <div className="section-title">
          {userType !== "forgotPassword" && (
            <h2>{userType === "login" ? "Login" : "SignUp"}</h2>
          )}
          {userType === "forgotPassword" && <h2>Forgot Password</h2>}
        </div>
      </div>
      {userType !== "forgotPassword" && formContent}
      {userType === "forgotPassword" && (
        <ForgotPassword schema={schema} onBack={loginHandler} />
      )}
    </section>
  );
}

export default LoginPage;
