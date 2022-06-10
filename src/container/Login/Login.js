import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { NavLink } from "react-router-dom";

function Login(props) {
    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <div className="heading">
                            <h2 className="fw-bolder text-uppercase fs-3 text-center">
                                Login
                            </h2>
                        </div>
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
                                <a href="#" className="link">
                                    Forgot password?
                                </a>
                            </div>
                            <Button className="w-100 mb-3 btn-dark">
                                Submit
                            </Button>
                            <p className="m-2 text-center">
                                Dont Have an Account?{" "}
                                <span className="text-dark">SIGN UP NOW</span>
                            </p>
                            <NavLink className="link" to="/signup">
                                <Button className="w-100 btn-warning">
                                    SignUp
                                </Button>
                            </NavLink>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
