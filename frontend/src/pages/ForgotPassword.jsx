import React, { useState } from 'react';
import './css/LoginSignup.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const submitHandler = async () => {
        const response = await fetch("http://localhost:4000/api/users/forgotpassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        alert(data.message || data.error);
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Forgot Password</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button onClick={submitHandler}>Reset Password</button>
            </div>
        </div>
    )
}

export default ForgotPassword;
