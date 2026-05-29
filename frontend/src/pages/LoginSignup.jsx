import React, { useState } from "react";
import './css/LoginSignup.css';

const LoginSignup = () => {

    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ 
        username: "", 
        email: "", 
        password: "" 
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const login = async () => {
        console.log("Login executed", formData);
        let responseData;
        await fetch("http://localhost:4000/api/users/login", {
            method: "POST",
            headers: {
                "Accept": "application/form-data",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            responseData = data;
        })

        if(responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.error || "Login failed");
        }
    }

    const signup = async () => {
        console.log("Signup executed", formData);
        let responseData;
        await fetch("http://localhost:4000/api/users/signup", {
            method: "POST",
            headers: {
                "Accept": "application/form-data",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            responseData = data;
        })

        if(responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.error || "Signup failed");
        }
    }

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>{isSignup ? "Sign Up" : "Log In"}</h1>
                <div className="loginsignup-fields">
                    {isSignup ? <input name="username" type="text" placeholder="Username" value={formData.username} onChange={changeHandler} /> : <></>}
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={changeHandler} />
                    <input name="password" type="password" placeholder="Password" value={formData.password} onChange={changeHandler} />
                </div>
                <button onClick={() => { isSignup ? signup() : login() }}>Continue</button>
                <p className="loginsignup-login">
                    {isSignup ? "Already have an account?" : "Create an account?"}
                    <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? " Login" : " Click here"}</span>
                </p>
                {!isSignup && <p className="loginsignup-login">Forgot your password? <span onClick={() => window.location.replace("/forgot-password")}>Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" /> 
                    <p>By continuing, i agree to the <span>Terms and Conditions</span></p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;