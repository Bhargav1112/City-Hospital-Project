import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik } from "formik";

function Login(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  const userLoginHandler = (data) => {
    const storageData = JSON.parse(localStorage.getItem("user"));
    const existingUserIndex = storageData.findIndex(
      (user) => user.email === data.email && user.password === data.password
    );
    const existingUser = storageData[existingUserIndex];

    if (!existingUser) {
      // failure state
      setLoggedIn(false);
    }
    // success state
    setLoggedIn(true);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: props.schema,
    onSubmit: (values, actions) => {
      userLoginHandler(values);
      actions.resetForm();
    },
  });

  const { handleBlur, handleChange, errors, handleSubmit, touched, values } =
    formik;

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-10 col-md-6">
          <div className="login-form rounded p-5 border border-1">
            {loggedIn && (
              <p style={{ color: "green", fonSize: "48px", margin: 0 }}>
                Successfully Logged In...!
              </p>
            )}
            {!loggedIn && touched.email && touched.password && (
              <p style={{ color: "red", fonSize: "48px", margin: 0 }}>
                Incorrect Email or Password...!
              </p>
            )}
            {!loggedIn && (
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    value={values.email}
                    id="email"
                    name="email"
                    placeholder="abc@abc.com"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    value={values.password}
                    id="Password"
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}
                </FormGroup>
                <div className="mb-3 d-flex justify-content-between">
                  <FormGroup check>
                    <Input type="checkbox" />
                    <Label check>Remember Me</Label>
                  </FormGroup>
                  <a href="#" className="link" onClick={props.onForgotPwd}>
                    Forgot password?
                  </a>
                </div>
                <Button className="w-100 mb-3 btn-dark" type="submit">
                  Login
                </Button>

                <div className="d-flex align-items-center gap-3 justify-content-center">
                  <span>Create a new Account: </span>
                  <Button className="btn-warning" onClick={props.onSignUp}>
                    SignUp
                  </Button>
                </div>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
