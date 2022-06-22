import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik } from "formik";

function Login(props) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [loginError, setLoginError] = useState(null);

    const userLoginHandler = (data) => {
        const storageData = JSON.parse(localStorage.getItem("user"));
        if (!storageData) {
            setLoginError("User not found.");
            return;
        }
        const existingUserIndex = storageData.findIndex((user) => {
            return user.email === data.email && user.password === data.password;
        });
        console.log(existingUserIndex);
        const existingUser = storageData[existingUserIndex];
        console.log(existingUser);

        if (!existingUser) {
            // failure state
            setLoggedIn(false);
            setLoginError("Invalid Email or Password");
            return;
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
                            <p
                                style={{
                                    color: "green",
                                    fontSize: "2rem",
                                    margin: 0,
                                }}
                            >
                                Successfully Logged In...!
                            </p>
                        )}
                        {!loggedIn && loginError && (
                            <p
                                style={{
                                    color: "red",
                                    margin: 0,
                                    textAlign: "center",
                                }}
                            >
                                {loginError}
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
                                        <p className="text-danger">
                                            {errors.email}
                                        </p>
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
                                        <p className="text-danger">
                                            {errors.password}
                                        </p>
                                    )}
                                </FormGroup>
                                <div className="mb-3 d-flex justify-content-between">
                                    <FormGroup check>
                                        <Input type="checkbox" />
                                        <Label check>Remember Me</Label>
                                    </FormGroup>
                                    <a
                                        href="#"
                                        className="link"
                                        onClick={props.onForgotPwd}
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <Button
                                    className="w-100 mb-3 btn-dark"
                                    type="submit"
                                >
                                    Login
                                </Button>

                                <div className="d-flex align-items-center gap-3 justify-content-center">
                                    <span>Create a new Account: </span>
                                    <Button
                                        className="btn-warning"
                                        onClick={props.onSignUp}
                                    >
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
