import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function Login(props) {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="abc@abc.com"
                                    type="email"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input
                                    id="examplePassword"
                                    name="password"
                                    placeholder="password"
                                    type="password"
                                />
                            </FormGroup>
                            <div className="mb-3 d-flex justify-content-between">
                                <FormGroup check>
                                    <Input type="checkbox" />{" "}
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
                            <Button className="w-100 mb-3 btn-dark">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
