import React, { useState } from 'react';
import Login from './Login'
import SingUp from './SignUp'

function LoginPage(props) {
    const [userType, setUserType] = useState('login')

    const onSignUpHandler = () => {
        setUserType('signup')
    }
    const onLoginHandler = () => {
        setUserType('login')
    }

    const formContent = userType === 'login' ? <Login onSignUp={onSignUpHandler} /> : <SingUp onLogin={onLoginHandler} />
    return (
        <section>
            <div className="container">
                <div className="section-title">
                    <h2>Login</h2>
                </div>
            </div>
            {formContent}
        </section>
    );
}

export default LoginPage;