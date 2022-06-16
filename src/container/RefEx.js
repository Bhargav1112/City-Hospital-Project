import React, { useRef } from 'react';

function RefEx(props) {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const getDetailHandler = () => {
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        nameRef.current.style.background = 'grey';
        emailRef.current.focus()
    }

    return (
        <div>
            <input ref={nameRef} type="text" name="name" placeholder='Enter Your Name' />
            <input ref={emailRef} type="text" name="email" placeholder='Enter Your Email' />
            <input ref={passwordRef} type="password" name="password" placeholder='Enter Your Password' />
            <button type='button' onClick={getDetailHandler}>SUBMIT</button>
        </div>
    );
}

export default RefEx;