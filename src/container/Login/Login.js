import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik, Form, Formik } from 'formik';

function Login(props) {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: props.schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const { handleBlur, handleChange, errors, handleSubmit } = formik

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="abc@abc.com"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && <p>{errors.email}</p>}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Password">Password</Label>
                                    <Input
                                        id="Password"
                                        name="password"
                                        placeholder="password"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && <p>{errors.password}</p>}
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
                                <Button className="w-100 mb-3 btn-dark" type="submit">
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
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
