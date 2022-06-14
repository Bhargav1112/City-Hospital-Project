import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function ForgotPassword(props) {
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
                            <Button className="me-3 btn-warning">Submit</Button>
                            <Button className="btn-dark" onClick={props.onBack}>
                                Go Back
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
