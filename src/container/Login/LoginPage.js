import React, { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import SingUp from "./SignUp";

function LoginPage(props) {
    const [userType, setUserType] = useState("login");
    const [forgotPassword, setForgotPassword] = useState(false);

    const signUpHandler = () => {
        setUserType("signup");
    };
    const loginHandler = () => {
        setUserType("login");
        setForgotPassword(false);
    };
    const forgotPasswordHandler = () => {
        setForgotPassword(true);
    };

    const formContent =
        userType === "login" ? (
            <Login
                onSignUp={signUpHandler}
                onForgotPwd={forgotPasswordHandler}
            />
        ) : (
            <SingUp onLogin={loginHandler} />
        );
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    {!forgotPassword && (
                        <h2>{userType === "login" ? "Login" : "SignUp"}</h2>
                    )}
                    {forgotPassword && <h2>Forgot Password</h2>}
                </div>
            </div>
            {!forgotPassword && formContent}
            {forgotPassword && <ForgotPassword onBack={loginHandler} />}
        </section>
    );
}

export default LoginPage;
