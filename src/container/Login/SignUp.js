import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function SignUp(props) {
    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <div className="heading">
                            <h2 className="fw-bolder text-uppercase fs-3 text-center">
                                SignUp
                            </h2>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label for="username">Name</Label>
                                <Input
                                    id="username"
                                    name="username"
                                    placeholder="Enter your name"
                                    type="text"
                                />
                            </FormGroup>
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
                            <FormGroup>
                                <Label for="cPassword">Confirm Password</Label>
                                <Input
                                    id="cPassword"
                                    name="password"
                                    placeholder="Re-Enter Password"
                                    type="password"
                                />
                            </FormGroup>
                            <Button className="w-100 mt-3 btn-warning">
                                Register
                            </Button>
                            <div className="d-flex align-items-center gap-3 justify-content-center">
                                <span>Already Have an Account? </span>
                                <Button className="mt-3 btn-dark" onClick={props.onLogin}>
                                    Login
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
