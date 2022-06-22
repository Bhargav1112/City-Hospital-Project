import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useFormik, Formik } from "formik";

function SignUp(props) {
    const storeDataOnLocalStorage = (data) => {
        const localStorageData = JSON.parse(localStorage.getItem("user"));
        if (!localStorageData) {
            localStorage.setItem("user", JSON.stringify([data]));
        }
        localStorageData.push(data);
        localStorage.setItem("user", JSON.stringify(localStorageData));
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: props.schema,
        onSubmit: (values, actions) => {
            actions.resetForm();
            storeDataOnLocalStorage(values);
        },
    });
    const { handleBlur, handleChange, errors, handleSubmit, touched, values } =
        formik;

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-6">
                    <div className="login-form rounded p-5 border border-1">
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit}>
                                <FormGroup>
                                    <Label for="username">Name</Label>
                                    <Input
                                        value={values.name}
                                        id="username"
                                        name="name"
                                        placeholder="Enter your name"
                                        type="text"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="text-danger">
                                            {errors.name}
                                        </p>
                                    )}
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        value={values.email}
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="abc@abc.com"
                                        type="email"
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
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        value={values.password}
                                        id="examplePassword"
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
                                <FormGroup>
                                    <Label for="cPassword">
                                        Confirm Password
                                    </Label>
                                    <Input
                                        value={values.confirmPassword}
                                        id="cPassword"
                                        name="confirmPassword"
                                        placeholder="Re-Enter Password"
                                        type="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirmPassword &&
                                        touched.confirmPassword && (
                                            <p className="text-danger">
                                                {errors.confirmPassword}
                                            </p>
                                        )}
                                </FormGroup>
                                <Button
                                    className="w-100 my-3 btn-warning"
                                    type="submit"
                                >
                                    Register
                                </Button>
                                <div className="d-flex align-items-center gap-3 justify-content-center">
                                    <span>Already Have an Account? </span>
                                    <Button
                                        className="btn-dark"
                                        onClick={props.onLogin}
                                    >
                                        Login
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

export default SignUp;
